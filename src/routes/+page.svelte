<script>
  import { lang } from '$lib/stores';
  import Contact from './contact/+page.svelte';
  $: current = $lang;
  const yearBadges = ['2023', '2024'];
</script>

<svelte:head>
  <meta name="description" content={current === 'tr'
    ? 'Ben Mert, Manisa Celal Bayar Üniversitesi Mekatronik Mühendisliği öğrencisiyim. Yazılıma ve teknolojiye duyduğum ilgi, beni sürekli araştırmaya ve üretmeye yöneltti. Güncel olarak özellikle back-end geliştirme ve otomasyon sistemleri üzerine çalışıyor, farklı projelerde edindiğim deneyimlerle teknik becerilerimi ileriye taşıyorum. Problem çözmeyi, yeni şeyler öğrenmeyi ve edindiğim bilgileri gerçek projelere aktarmayı seviyorum.'
    : 'I am Mert, a Mechatronics Engineering student at Manisa Celal Bayar University. I focus on back‑end development and automation systems, continuously exploring and creating. I enjoy problem‑solving, learning new things, and applying my knowledge to real‑world projects.'} />
</svelte:head>

<section id="top" class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="title">
        <span class="title-line">Mert Görgülü</span>
        <span class="title-gradient">{current === 'tr' ? 'Mühendis & Yazılım Geliştirici' : 'Engineer & Developer'}</span>
      </h1>
      <p class="subtitle">
        {current === 'tr' 
          ? 'Mekatronik Mühendisliği Öğrencisi & Full-Stack Developer' 
          : 'Mechatronics Engineering Student & Full-Stack Developer'}
      </p>
  <p class="lead">
    {current === 'tr'
          ? 'Otomasyon sistemleri, robotik ve modern web teknolojileri alanında çalışıyorum. Problem çözmeyi ve yenilikçi çözümler üretmeyi seviyorum.'
          : 'I work in automation systems, robotics, and modern web technologies. I love problem-solving and creating innovative solutions.'}
      </p>
      <div class="hero-meta">
        <div class="meta-item">
          <span class="meta-icon">📍</span>
          <span>Manisa, Turkey</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon">🎓</span>
          <span>{current === 'tr' ? 'MCBÜ Mekatronik Mühendisliği' : 'MCBU Mechatronics Engineering'}</span>
        </div>
        <div class="meta-item">
          <span class="meta-icon status-dot"></span>
          <span>{current === 'tr' ? ' Staj için uygun' : 'Available for internship'}</span>
        </div>
      </div>
      <div class="hero-actions">
        <a href="/resume" class="btn btn-primary">
          {current === 'tr' ? 'Özgeçmişimi İncele' : 'View Resume'}
          <span class="btn-icon">→</span>
        </a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="floating-card card-1">
        <div class="card-icon">⚙️</div>
        <span>{current === 'tr' ? 'Otomasyon' : 'Automation'}</span>
      </div>
      <div class="floating-card card-2">
        <div class="card-icon">🤖</div>
        <span>{current === 'tr' ? 'Robotik' : 'Robotics'}</span>
      </div>
      <div class="floating-card card-3">
        <div class="card-icon">💻</div>
        <span>{current === 'tr' ? 'Web Geliştirme' : 'Web Dev'}</span>
      </div>
    </div>
  </div>
</section>

<section id="about" class="section">
  <h2>{current === 'tr' ? 'Hakkımda' : 'About'}</h2>
  <p>
    {current === 'tr'
      ? 'Ben Mert, Manisa Celal Bayar Üniversitesi Mekatronik Mühendisliği öğrencisiyim. Yazılıma ve teknolojiye duyduğum ilgi, beni sürekli araştırmaya ve üretmeye yöneltti. Güncel olarak özellikle back-end geliştirme ve otomasyon sistemleri üzerine çalışıyor, farklı projelerde edindiğim deneyimlerle teknik becerilerimi ileriye taşıyorum.'
      : 'I am Mert, a Mechatronics Engineering student at Manisa Celal Bayar University. My interest in software and technology has led me to continuously explore and create. Currently, I am particularly focusing on back‑end development and automation systems, enhancing my technical skills through hands‑on experience in various projects.'}
  </p>
  <p>
    {current === 'tr'
      ? 'Problem çözmeyi, yeni şeyler öğrenmeyi ve edindiğim bilgileri gerçek projelere aktarmayı seviyorum. Bu süreçte hem bireysel hem de ekip çalışmalarında aktif rol alarak gelişimime katkı sağlamaya devam ediyorum.'
      : 'I enjoy problem‑solving, learning new things, and applying my knowledge to real‑world projects. In this journey, I actively contribute to both individual and team projects, constantly striving to improve myself.'}
  </p>
  <p>
    {current === 'tr'
      ? 'Daha fazla bilgi edinmek isterseniz, özgeçmişimi incelemenizi tavsiye ederim.'
      : 'For more details, I kindly invite you to take a look at my resume.'}
  </p>
</section>

<section id="skills" class="section">
  <h2>{current === 'tr' ? 'Teknolojiler & Beceriler' : 'Technologies & Skills'}</h2>
  <div class="skills-grid">
    <div class="skill-category">
      <h3>{current === 'tr' ? 'Programlama Dilleri' : 'Programming Languages'}</h3>
      <div class="skill-tags">
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">Python</span>
        <span class="skill-tag">HTML</span>
        <span class="skill-tag">CSS</span>
      </div>
    </div>
    <div class="skill-category">
      <h3>{current === 'tr' ? 'Web Teknolojileri' : 'Web Technologies'}</h3>
      <div class="skill-tags">
        <span class="skill-tag">SvelteKit</span>
        <span class="skill-tag">Node.js</span>
        <span class="skill-tag">Express</span>
      </div>
    </div>
    <div class="skill-category">
      <h3>{current === 'tr' ? 'Mühendislik Araçları' : 'Engineering Tools'}</h3>
      <div class="skill-tags">
        <span class="skill-tag">SolidWorks</span>
        <span class="skill-tag">Arduino</span>
        <span class="skill-tag">ROS2</span>
        <span class="skill-tag">PyTorch</span>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="section">
  <h2>{current === 'tr' ? 'Projeler' : 'Featured Projects'}</h2>
  <div class="projects-grid">
    <div class="project-card">
      <div class="project-header">
        <h3>{current === 'tr' ? 'Poyraz Robotaksi' : 'Poyraz Robotaxi'}</h3>
        <span class="project-year">2022–2023</span>
      </div>
      <p class="project-description">
      {current === 'tr'
          ? 'MCBÜ Bilim ve Teknoloji Kulübü bünyesindeki ekipte aktif rol aldım. "Karaçor" isimli otonom aracımızla Robotaksi-Binek Otonom Araç Yarışması\'nda finalist olduk.'
          : 'Active role in the university team; with our autonomous vehicle "Karaçor" we became finalists in the Robotaxi‑Passenger Autonomous Vehicle Competition.'}
      </p>
      <div class="project-tags">
        <span class="project-tag">{current === 'tr' ? 'Otonom Sistemler' : 'Autonomous Systems'}</span>
      </div>
      <a class="project-link" href="https://www.youtube.com/watch?v=TmRs7XQ3giY" target="_blank" rel="noreferrer">
        {current === 'tr' ? 'Proje Videosu' : 'Project Video'} ↗
      </a>
    </div>
    
    <div class="project-card">
      <div class="project-header">
        <h3>UARTEK Rover</h3>
        <span class="project-year">2023–2025</span>
  </div>
      <p class="project-description">
      {current === 'tr'
        ? 'ERC ve CIRC yarışmalarına başvuran ekipte robot kol geliştirme ve simülasyon hazırlama görevlerinde yer aldım.'
        : 'In the team applying to ERC and CIRC competitions, I worked on robotic arm development and simulation preparation.'}
    </p>
      <div class="project-tags">
        <span class="project-tag">{current === 'tr' ? 'Robotik' : 'Robotics'}</span>
        <span class="project-tag">{current === 'tr' ? 'Simülasyon' : 'Simulation'}</span>
      </div>
      <div class="project-links">
        <a class="project-link" href="https://www.youtube.com/watch?v=LU82qFIDWTU" target="_blank" rel="noreferrer">{current === 'tr' ? '2024 Proje Videosu' : '2024 Project Video'} ↗</a>
        <a class="project-link" href="https://www.youtube.com/watch?v=Zjbt3IUMxvc" target="_blank" rel="noreferrer">{current === 'tr' ? '2025 Proje Videosu' : '2025 Project Video'} ↗</a>
      </div>
    </div>
    
    <div class="project-card">
      <div class="project-header">
        <h3>{current === 'tr' ? 'UARTEK Hava Savunma Sistemi' : 'UARTEK Air Defence System'}</h3>
        <span class="project-year">2024–2025</span>
  </div>
      <p class="project-description">
      {current === 'tr'
          ? 'Galvonometre tabanlı hava savunma sistemi için otonom ve manuel yönetimi sağlayan kullanıcı arayüzünü geliştirdim; Teknofest\'e başvurduk.'
        : 'Developed the user interface enabling autonomous and manual control for a galvanometer‑based air defence system; submitted to Teknofest.'}
    </p>
      <div class="project-tags">
        <span class="project-tag">{current === 'tr' ? 'GUI Geliştirici' : 'GUI Developer'}</span>
      </div>
    </div>
  </div>
</section>

<section id="achievements" class="section">
  <h2>{current === 'tr' ? 'Sertifikalar' : 'Certifications'}</h2>
  <div class="achievements-grid">
    <div class="achievement-card">
      <div class="achievement-icon">
        <img src="/PyTorch.png" alt="PyTorch Logo" class="logo-img" />
      </div>
      <h3>PyTorch</h3>
      <p>{current === 'tr' ? 'Derin Öğrenme ve Yapay Zeka Sertifikası' : 'Deep Learning and AI Certification'}</p>
      <span class="achievement-year">{current === 'tr' ? 'Sertifika' : 'Certificate'}</span>
    </div>
    
    <div class="achievement-card">
      <div class="achievement-icon">
        <img src="/Node.js.png" alt="Node.js Logo" class="logo-img" />
      </div>
      <h3>Node.js</h3>
      <p>{current === 'tr' ? 'Backend Geliştirme Sertifikası' : 'Backend Development Certification'}</p>
      <span class="achievement-year">{current === 'tr' ? 'Sertifika' : 'Certificate'}</span>
    </div>
    
    <div class="achievement-card">
      <div class="achievement-icon">
        <img src="/ROS2.png" alt="ROS2 Logo" class="logo-img" />
      </div>
      <h3>ROS2</h3>
      <p>{current === 'tr' ? 'Robot İşletim Sistemi Sertifikası' : 'Robot Operating System Certification'}</p>
      <span class="achievement-year">{current === 'tr' ? 'Sertifika' : 'Certificate'}</span>
    </div>
  </div>
</section>

<section id="contact" class="section">
  <h2>{current === 'tr' ? 'İletişim' : 'Contact'}</h2>
  <Contact />
  <div style="height:24px"></div>
</section>

<style>
  /* Hero Section */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--bg) 0%, var(--bg-secondary) 100%);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-text {
    max-width: 600px;
  }

  .title {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1.1;
    margin: 0 0 1rem;
    letter-spacing: -0.02em;
  }

  .title-line {
    display: block;
    color: var(--fg);
  }

  .title-gradient {
    display: block;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--fg-secondary);
    margin: 0 0 1.5rem;
  }

  .lead {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--fg-secondary);
    margin: 0 0 2rem;
  }

  .hero-meta {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 0 0 2rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--fg-secondary);
    line-height: 1;
    min-height: 1.5rem;
  }

  .meta-icon {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }

  .meta-icon.status-dot {
    width: 1.1rem;
    height: 1.1rem;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .meta-icon.status-dot::after {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--success);
    border-radius: 50%;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
    animation: pulse 2s infinite;
    display: block;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  .btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .btn-secondary {
    background: var(--bg-secondary);
    color: var(--fg);
    border: 1px solid var(--border);
  }

  .btn-secondary:hover {
    background: var(--border-light);
    transform: translateY(-2px);
  }

  .btn-icon {
    transition: transform 0.3s ease;
  }

  .btn-primary:hover .btn-icon {
    transform: translateX(4px);
  }

  /* Hero Visual */
  .hero-visual {
    position: relative;
    height: 400px;
  }

  .floating-card {
    position: absolute;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: var(--shadow-lg);
    backdrop-filter: blur(10px);
    animation: float 6s ease-in-out infinite;
  }

  .card-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  .card-2 {
    top: 50%;
    right: 20%;
    animation-delay: 2s;
  }

  .card-3 {
    bottom: 20%;
    left: 30%;
    animation-delay: 4s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .card-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  /* Sections */
  .section {
    max-width: 1200px;
    margin: 6rem auto 0;
    padding: 0 2rem;
  }

  .section h2 {
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    margin: 0 0 3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Skills Section */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .skill-category {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
  }

  .skill-category:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .skill-category h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 1.5rem;
    color: var(--fg);
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .skill-tag {
    background: var(--gradient-accent);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    box-shadow: var(--shadow);
  }

  /* Projects Section */
  .projects-grid {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }

  .project-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: var(--shadow);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-primary);
  }

  .project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .project-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: var(--fg);
  }

  .project-year {
    background: var(--gradient-primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    white-space: nowrap;
  }

  .project-description {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--fg-secondary);
    margin: 0 0 1.5rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .project-tag {
    background: var(--border-light);
    color: var(--fg);
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .project-link, .project-links {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .project-link:hover {
    color: var(--accent-dark);
  }

  .project-links {
    display: flex;
    gap: 1rem;
  }

  /* Achievements Section */
  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .achievement-card {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow);
  }

  .achievement-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-secondary);
  }

  .achievement-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }

  .achievement-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  .logo-img {
    width: 64px;
    height: 64px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }


  .achievement-card h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 0 1rem;
    color: var(--fg);
  }

  .achievement-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--fg-secondary);
    margin: 0 0 1rem;
  }

  .achievement-year {
    background: var(--gradient-secondary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .title {
      font-size: 2.5rem;
    }

    .hero-visual {
      height: 300px;
    }

    .floating-card {
      padding: 1rem;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }

    .project-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .hero-actions {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .hero {
      padding: 2rem 1rem;
    }

    .section {
      padding: 0 1rem;
    }

    .title {
      font-size: 2rem;
    }

    .btn {
      padding: 0.75rem 1.25rem;
      font-size: 0.9rem;
    }
  }
</style>
