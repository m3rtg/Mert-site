import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    slug: { type: String, required: true, unique: true },
    order: { type: Number, default: 0 },
    period: { type: String }, 
    category_tr: { type: String },
    category_en: { type: String },
    title_tr: { type: String },
    title_en: { type: String },
    desc_tr: { type: String },
    desc_en: { type: String },
    links: [{
        title_tr: { type: String },
        title_en: { type: String },
        url: { type: String }
    }],
}, { timestamps: true });

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
