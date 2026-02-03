export const useAuth = () => {
    const user = useState('user', () => null);

    const fetchUser = async () => {
        try {
            const { user: u } = await $fetch('/api/auth/me');
            user.value = u;
        } catch (e) {
            user.value = null;
        }
    };

    const login = async (username, password) => {
        try {
            const { user: u } = await $fetch('/api/auth/login', {
                method: 'POST',
                body: { username, password }
            });
            user.value = u;
            return true;
        } catch (e) {
            return false;
        }
    };

    const register = async (username, password) => {
        try {
            const { user: u } = await $fetch('/api/auth/register', {
                method: 'POST',
                body: { username, password }
            });
            user.value = u;
            return true;
        } catch (e) {
            return false;
        }
    };

    const logout = async () => {
        await $fetch('/api/auth/logout', { method: 'POST' });
        user.value = null;
        navigateTo('/');
    };

    return {
        user,
        fetchUser,
        login,
        register,
        logout
    };
};
