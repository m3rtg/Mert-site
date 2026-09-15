import mongoose from 'mongoose';
import { env } from '$env/dynamic/private';

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(env.MONGODB_URI);
        isConnected = db.connections[0].readyState === 1;
        console.log('MongoDB başarıyla bağlandı');
    } catch (error) {
        console.error('MongoDB bağlantı hatası:', error);
        throw new Error('Veritabanına bağlanılamadı');
    }
};
