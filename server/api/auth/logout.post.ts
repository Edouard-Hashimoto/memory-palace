import { deleteSession } from '~/server/utils/auth';

export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'auth_token');

    if (token) {
        await deleteSession(token);
    }

    deleteCookie(event, 'auth_token');
    return { success: true };
});
