import { db } from '~/server/utils/db';
import { users } from '~/server/database/schema';
import { verifyPassword, createSession } from '~/server/utils/auth';
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { username, password } = body;

    if (!username || !password) {
        throw createError({ statusCode: 400, message: 'Missing fields' });
    }

    // Find user
    const result = await db.select().from(users).where(eq(users.username, username));
    if (result.length === 0) {
        throw createError({ statusCode: 401, message: 'Invalid credentials' });
    }

    const user = result[0];

    // Verify password
    if (!verifyPassword(password, user.password)) {
        throw createError({ statusCode: 401, message: 'Invalid credentials' });
    }

    // Create session
    const { token, expiresAt } = await createSession(user.id);

    setCookie(event, 'auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(expiresAt),
        path: '/'
    });

    return { success: true, user: { id: user.id, username: user.username } };
});
