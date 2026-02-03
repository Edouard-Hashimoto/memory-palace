import { db } from '~/server/utils/db';
import { users, souvenirs } from '~/server/database/schema';
import { eq, getTableColumns } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
    const result = await db.select({
        ...getTableColumns(souvenirs),
        username: users.username
    })
        .from(souvenirs)
        .leftJoin(users, eq(souvenirs.userId, users.id));

    return result;
});
