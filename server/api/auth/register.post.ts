import { db } from '~/server/utils/db';
import { users } from '~/server/database/schema';
import { hashPassword, createSession } from '~/server/utils/auth';
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { username, password } = body;

    if (!username || !password) {
        throw createError({ statusCode: 400, message: 'Missing fields' });
    }

    // Check existing user
    const existing = await db.select().from(users).where(eq(users.username, username));
    if (existing.length > 0) {
        throw createError({ statusCode: 400, message: 'Username already taken' });
    }

    // Create user
    const hashedPassword = hashPassword(password);
    const result = await db.insert(users).values({
        username,
        password: hashedPassword,
    }).returning();

    const user = result[0];

    // Log them in immediately
    const { token, expiresAt } = await createSession(user.id);

    setCookie(event, 'auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(expiresAt),
        path: '/'
    });

    return {
        user: { id: user.id, username: user.username }
    };
});
