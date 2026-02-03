import { db } from '~/server/utils/db';
import { souvenirs } from '~/server/database/schema';
import { readMultipartFormData } from 'h3';
import fs from 'node:fs';
import path from 'node:path';

import { getSession } from '~/server/utils/auth';

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
        // Ensure upload directory exists
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const ext = path.extname(file.filename);
        const fileName = `${Date.now()}-${Math.floor(Math.random() * 1000)}${ext}`;
        const uploadPath = path.join(uploadDir, fileName);

        fs.writeFileSync(uploadPath, file.data);
        urlMedia = `/uploads/${fileName}`;
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
