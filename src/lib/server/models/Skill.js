import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    category: { 
        type: String, 
        required: true,
        enum: ['languages', 'frameworks', 'tools']
    },
    name: { type: String, required: true },
    level: { type: Number, min: 0, max: 100 }
}, { timestamps: true });

export const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
