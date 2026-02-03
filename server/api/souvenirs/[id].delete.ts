import { db } from '~/server/utils/db';
import { souvenirs } from '~/server/database/schema';
import { eq } from 'drizzle-orm';
import { getSession } from '~/server/utils/auth';
import fs from 'node:fs';
import path from 'node:path';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const token = getCookie(event, 'auth_token');

    if (!token) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }

    const sessionResult = await getSession(token);
    if (!sessionResult || !sessionResult.user) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }

    if (!id) {
        throw createError({ statusCode: 400, statusMessage: 'Missing ID' });
    }

    const souvenirId = parseInt(id);

    // Verify ownership
    const target = await db.select().from(souvenirs).where(eq(souvenirs.id, souvenirId));

    if (target.length === 0) {
        throw createError({ statusCode: 404, statusMessage: 'Not found' });
    }

    const souvenir = target[0];

    if (souvenir.userId !== sessionResult.user.id) {
        throw createError({ statusCode: 403, statusMessage: 'Forbidden' });
    }

    // Delete associated file if it exists and is local
    if (souvenir.urlMedia && souvenir.urlMedia.startsWith('/uploads/')) {
        const filePath = path.join(process.cwd(), 'public', souvenir.urlMedia.replace('/', path.sep));
        if (fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath);
            } catch (e) {
                console.error("Failed to delete file:", e);
            }
        }
    }

    await db.delete(souvenirs).where(eq(souvenirs.id, souvenirId));

    return { success: true };
});
