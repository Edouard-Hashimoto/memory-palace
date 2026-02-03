import { getSession } from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'auth_token');

    if (!token) {
        return { user: null };
    }

    const result = await getSession(token);

    if (!result) {
        return { user: null };
    }

    return {
        user: {
            id: result.user.id,
            username: result.user.username,
            createdAt: result.user.createdAt
        }
    };
});
