import { db } from '~/server/utils/db';
import { users, sessions } from '~/server/database/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

export const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, 10);
};

export const verifyPassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
};

export const createSession = async (userId: number) => {
    const token = uuidv4();
    // Session expires in 7 days
    const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;

    await db.insert(sessions).values({
        id: token,
        userId: userId,
        expiresAt: expiresAt
    });

    return { token, expiresAt };
};

export const getSession = async (token: string) => {
    const result = await db.select().from(sessions).where(eq(sessions.id, token)).leftJoin(users, eq(sessions.userId, users.id));

    if (result.length === 0) return null;

    const session = result[0].sessions;
    const user = result[0].users;

    if (Date.now() > session.expiresAt) {
        await db.delete(sessions).where(eq(sessions.id, token));
        return null;
    }

    return { session, user };
};

export const deleteSession = async (token: string) => {
    await db.delete(sessions).where(eq(sessions.id, token));
};
