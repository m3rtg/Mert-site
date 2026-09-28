import { connectDB } from '$lib/server/db';
import { Project } from '$lib/server/models/Project';
import { Skill } from '$lib/server/models/Skill';
import { fail, redirect } from '@sveltejs/kit';

export const load = async () => {
    await connectDB();
    const rawProjects = await Project.find().sort({ order: 1 }).lean();
    const rawSkills = await Skill.find().sort({ createdAt: -1 }).lean();
    const projects = JSON.parse(JSON.stringify(rawProjects));
    const skills = JSON.parse(JSON.stringify(rawSkills));
    return { projects, skills };
};

export const actions = {
    addProject: async ({ request }) => {
        await connectDB();
        const data = await request.formData();
        try {
            let order = Number(data.get('order'));
            if (!order) {
                const maxProject = await Project.findOne().sort({ order: -1 });
                order = maxProject ? maxProject.order + 1 : 1;
            } else {
                await Project.updateMany(
                    { order: { $gte: order } },
                    { $inc: { order: 1 } }
                );
            }
            const project = new Project({
                slug: data.get('slug'),
                order: order,
                period: data.get('period'),
                category_tr: data.get('category_tr'),
                category_en: data.get('category_en'),
                title_tr: data.get('title_tr'),
                title_en: data.get('title_en'),
                desc_tr: data.get('desc_tr'),
                desc_en: data.get('desc_en'),
            });
            await project.save();
            return { success: true };
        } catch (error) {
            return fail(400, { error: 'Proje eklenemedi.' });
        }
    },
    editProject: async ({ request }) => {
        await connectDB();
        const data = await request.formData();
        try {
            const id = data.get('id');
            const newOrder = Number(data.get('order')) || 0;
            
            const oldProject = await Project.findById(id);
            if (!oldProject) return fail(404, { error: 'Proje bulunamadı.' });
            
            const oldOrder = oldProject.order;
            
            if (newOrder !== oldOrder) {
                if (newOrder < oldOrder) {
                    await Project.updateMany(
                        { order: { $gte: newOrder, $lt: oldOrder }, _id: { $ne: id } },
                        { $inc: { order: 1 } }
                    );
                } else {
                    await Project.updateMany(
                        { order: { $gt: oldOrder, $lte: newOrder }, _id: { $ne: id } },
                        { $inc: { order: -1 } }
                    );
                }
            }

            await Project.findByIdAndUpdate(id, {
                slug: data.get('slug'),
                order: newOrder,
                period: data.get('period'),
                category_tr: data.get('category_tr'),
                category_en: data.get('category_en'),
                title_tr: data.get('title_tr'),
                title_en: data.get('title_en'),
                desc_tr: data.get('desc_tr'),
                desc_en: data.get('desc_en'),
            });
            return { success: true };
        } catch (error) {
            return fail(400, { error: 'Proje güncellenemedi.' });
        }
    },
    deleteProject: async ({ request }) => {
        await connectDB();
        const data = await request.formData();
        const id = data.get('id');
        const project = await Project.findById(id);
        if (project) {
            await Project.updateMany(
                { order: { $gt: project.order } },
                { $inc: { order: -1 } }
            );
            await Project.findByIdAndDelete(id);
        }
        return { success: true };
    },
    addSkill: async ({ request }) => {
        await connectDB();
        const data = await request.formData();
        try {
            const skill = new Skill({
                category: data.get('category'),
                name: data.get('name'),
                level: Number(data.get('level')) || 0
            });
            await skill.save();
            return { success: true };
        } catch (error) {
            return fail(400, { error: 'Yetenek eklenemedi.' });
        }
    },
    deleteSkill: async ({ request }) => {
        await connectDB();
        const data = await request.formData();
        const id = data.get('id');
        await Skill.findByIdAndDelete(id);
        return { success: true };
    },
    logout: async ({ cookies }) => {
        cookies.delete('admin_session', { path: '/' });
        throw redirect(303, '/admin0/login');
    }
};
