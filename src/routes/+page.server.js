import { connectDB } from '$lib/server/db';
import { Project } from '$lib/server/models/Project';
import { Skill } from '$lib/server/models/Skill';

export const load = async () => {
    await connectDB();
    
    const rawProjects = await Project.find().sort({ order: 1 }).lean();
    const rawSkills = await Skill.find().sort({ level: -1 }).lean();
    
    const projects = JSON.parse(JSON.stringify(rawProjects));
    const skills = JSON.parse(JSON.stringify(rawSkills));
    
    // Group skills by category for easier rendering in the template
    const skillsByCategory = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});
    
    return {
        projects,
        skillsByCategory
    };
};
