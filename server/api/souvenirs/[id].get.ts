import { db } from '~/server/utils/db';
import { users, souvenirs } from '~/server/database/schema';
import { eq, getTableColumns } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    if (!id) {
        throw createError({ statusCode: 400, statusMessage: 'Missing ID' });
    }

    const souvenirId = parseInt(id);

    const result = await db.select({
        ...getTableColumns(souvenirs),
        username: users.username
    })
        .from(souvenirs)
        .leftJoin(users, eq(souvenirs.userId, users.id))
        .where(eq(souvenirs.id, souvenirId));

    if (result.length === 0) {
        throw createError({ statusCode: 404, statusMessage: 'Souvenir not found' });
    }

    return result[0];
});
