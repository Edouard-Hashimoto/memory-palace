import { db } from '~/server/utils/db';
import { souvenirs } from '~/server/database/schema';
import { readMultipartFormData } from 'h3';
import { v2 as cloudinary } from 'cloudinary';
import { getSession } from '~/server/utils/auth';

// Configure Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

export default defineEventHandler(async (event) => {
    // Check authentication
    const token = getCookie(event, 'auth_token');
    if (!token) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }
    const sessionResult = await getSession(token);
    if (!sessionResult || !sessionResult.user) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }

    const body = await readMultipartFormData(event);
    if (!body) {
        throw createError({ statusCode: 400, statusMessage: 'Bad Request' });
    }

    // Helper to get field value
    const getField = (name: string) => body.find(x => x.name === name)?.data.toString() || '';

    const title = getField('title');
    const description = getField('description');
    const typeMedia = getField('type_media');
    const latitude = parseFloat(getField('latitude') || '0');
    const longitude = parseFloat(getField('longitude') || '0');

    let urlMedia = '';
    const file = body.find(x => x.name === 'file');

    if (file && file.filename) {
        // Upload to Cloudinary using promise
        try {
            const uploadResult = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { 
                        folder: 'memory-place',
                        resource_type: 'auto' // Detects image vs audio/video
                    },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                );
                // Write buffer to stream
                uploadStream.end(file.data);
            });
            
            // @ts-ignore
            urlMedia = uploadResult.secure_url;
            
        } catch (error) {
            console.error('Cloudinary upload error:', error);
            throw createError({ statusCode: 500, statusMessage: 'File Upload Error' });
        }
    }

    await db.insert(souvenirs).values({
        title,
        description,
        typeMedia,
        urlMedia,
        latitude,
        longitude,
        userId: sessionResult.user.id
    });

    return { success: true };
});
