import { fail, redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        if (username === env.ADMIN_USER && password === env.ADMIN_PASS) {
            // Oturumu 24 saatliğine kur
            cookies.set('admin_session', 'true', {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 
            });

            throw redirect(303, '/admin0');
        }

        return fail(400, { error: 'Hatalı kullanıcı adı veya şifre!' });
    }
};
