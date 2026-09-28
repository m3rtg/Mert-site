import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, url }) => {
    const session = cookies.get('admin_session');

    // Oturum yoksa ve login sayfasında değilsek login'e yönlendir
    if (!session && url.pathname !== '/admin0/login') {
        throw redirect(303, '/admin0/login');
    }

    // Oturum varsa ve login sayfasındaysak panele yönlendir
    if (session && url.pathname === '/admin0/login') {
        throw redirect(303, '/admin0');
    }

    return {
        isAuthenticated: !!session
    };
};
