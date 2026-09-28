import mongoose from 'mongoose';
import { readFileSync } from 'fs';
import { Project } from './src/lib/server/models/Project.js';
import { Skill } from './src/lib/server/models/Skill.js';

const envFile = readFileSync('.env', 'utf-8');
const mongoUriLine = envFile.split('\n').find(line => line.startsWith('MONGODB_URI='));
const MONGODB_URI = mongoUriLine.substring('MONGODB_URI='.length).trim();

const projects = [
    {
        slug: "nexuscontrol-sim",
        order: 1,
        period: "2026",
        category_tr: "Robotik & Simülasyon",
        category_en: "Robotics & Simulation",
        title_tr: "NexusControl Sim",
        title_en: "NexusControl Sim",
        desc_tr: "Fanuc LR Mate 200iC robot kolunun URDF modelini manipüle ederek tüm eksenlerde hareket simülasyonu yapar. İleri ve ters kinematik hesaplarını gerçek zamanlı çözer; en hızlı ve en ekonomik yolları karşılaştırır. Anlık voltaj çekimini izler, engel tespitinde çarpışmadan kaçınır, çarpışma anında acil stop tetiklenir — tüm süreç canlı simülasyon ekranında görüntülenir. Yüklenen G-code dosyaları için lazer kesim haritası oluşturur, maliyet ve süre tahmini yapar; işlem hızlandırılmış modda da simüle edilebilir.",
        desc_en: "Simulates full-axis motion of a Fanuc LR Mate 200iC robotic arm via URDF model manipulation. Solves forward and inverse kinematics in real time, comparing the fastest and most energy-efficient paths. Monitors live voltage draw, performs obstacle avoidance and triggers emergency stop on collision — all visualized in a live simulation viewport. Generates laser-cutting maps from loaded G-code files with cost and time estimation; the process can be run in accelerated simulation mode.",
        links: [
            {
                title_tr: "GitHub",
                title_en: "GitHub",
                url: "https://github.com/m3rtg/NexusControl-sim"
            }
        ]
    },
    {
        slug: "uartek-hava-savunma",
        order: 2,
        period: "2024 – 2025",
        category_tr: "GUI / Teknofest",
        category_en: "GUI / Teknofest",
        title_tr: "UARTEK Hava Savunma Sistemi",
        title_en: "UARTEK Air Defence System",
        desc_tr: "Galvonometre tabanlı hava savunma sistemi için otonom ve manuel yönetimi sağlayan kullanıcı arayüzünü geliştirdim; Teknofest'e başvurduk.",
        desc_en: "Developed the user interface enabling autonomous and manual control for a galvanometer-based air defence system; submitted to Teknofest.",
        links: []
    },
    {
        slug: "uartek-rover",
        order: 3,
        period: "2023 – 2025",
        category_tr: "Robotik",
        category_en: "Robotics",
        title_tr: "UARTEK Rover",
        title_en: "UARTEK Rover",
        desc_tr: "ERC ve CIRC yarışmalarına başvuran ekipte robot kol geliştirme ve simülasyon hazırlama görevlerinde yer aldım.",
        desc_en: "In the team applying to ERC and CIRC competitions, I worked on robotic arm development and simulation preparation.",
        links: [
            {
                title_tr: "2024",
                title_en: "2024",
                url: "https://www.youtube.com/watch?v=LU82qFIDWTU"
            },
            {
                title_tr: "2025",
                title_en: "2025",
                url: "https://www.youtube.com/watch?v=Zjbt3IUMxvc"
            }
        ]
    },
    {
        slug: "poyraz-robotaksi",
        order: 4,
        period: "2022 – 2023",
        category_tr: "Otonom Sistemler",
        category_en: "Autonomous Systems",
        title_tr: "Poyraz Robotaksi",
        title_en: "Poyraz Robotaxi",
        desc_tr: "MCBÜ Bilim ve Teknoloji Kulübü bünyesindeki ekipte aktif rol aldım. \"Karaçor\" isimli otonom aracımızla Robotaksi-Binek Otonom Araç Yarışması'nda finalist olduk.",
        desc_en: "Active role in the university team. With our autonomous vehicle \"Karaçor\" we became finalists in the Robotaxi-Passenger Autonomous Vehicle Competition.",
        links: [
            {
                title_tr: "Proje Videosu",
                title_en: "Project Video",
                url: "https://www.youtube.com/watch?v=TmRs7XQ3giY"
            }
        ]
    }
];

const skills = [
    { category: "languages", name: "JavaScript", level: 90 },
    { category: "languages", name: "Python", level: 85 },
    { category: "languages", name: "HTML", level: 95 },
    { category: "languages", name: "CSS", level: 90 },
    { category: "frameworks", name: "SvelteKit", level: 85 },
    { category: "frameworks", name: "Node.js", level: 80 },
    { category: "frameworks", name: "Express", level: 80 },
    { category: "tools", name: "SolidWorks", level: 75 },
    { category: "tools", name: "TIA Portal", level: 70 },
    { category: "tools", name: "DIADesigner", level: 70 },
    { category: "tools", name: "DOPSoft", level: 70 },
    { category: "tools", name: "ROS2", level: 65 },
    { category: "tools", name: "PyTorch", level: 60 }
];

async function seed() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Veritabanina baglanildi.");
        
        await Project.deleteMany({});
        await Skill.deleteMany({});
        console.log("Eski veriler temizlendi.");

        await Project.insertMany(projects);
        await Skill.insertMany(skills);
        console.log("Projeler ve yetenekler basariyla eklendi!");
        
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

seed();
