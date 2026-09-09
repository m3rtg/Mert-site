<script>
  import { lang } from '$lib/stores';
  import Contact from './contact/+page.svelte';
  $: current = $lang;
</script>

<svelte:head>
  <meta name="description" content={current === 'tr'
    ? 'Ben Mert, Manisa Celal Bayar Üniversitesi Mekatronik Mühendisliği öğrencisiyim. Yazılıma ve teknolojiye duyduğum ilgi, beni sürekli araştırmaya ve üretmeye yöneltti. Güncel olarak özellikle back-end geliştirme ve otomasyon sistemleri üzerine çalışıyor, farklı projelerde edindiğim deneyimlerle teknik becerilerimi ileriye taşıyorum. Problem çözmeyi, yeni şeyler öğrenmeyi ve edindiğim bilgileri gerçek projelere aktarmayı seviyorum.'
    : 'I am Mert, a Mechatronics Engineering student at Manisa Celal Bayar University. I focus on back-end development and automation systems, continuously exploring and creating. I enjoy problem-solving, learning new things, and applying my knowledge to real-world projects.'} />
</svelte:head>

<!-- ═══ HERO ═══ -->
<section id="top" class="section hero-section">
  <div class="hero-grid">
    <div class="hero-text">
      <div class="eyebrow">
        <span class="eyebrow-dot"></span>
        <span class="eyebrow-label">{current === 'tr' ? 'Staj için uygun' : 'Available for internship'}</span>
      </div>
      <h1 class="hero-name">Mert Görgülü</h1>
      <p class="hero-title">
        {current === 'tr'
          ? 'Mekatronik Mühendisliği Öğrencisi · Full-Stack Developer'
          : 'Mechatronics Engineering Student · Full-Stack Developer'}
      </p>
      <p class="hero-desc">
        {current === 'tr'
          ? 'Otomasyon sistemleri, robotik ve modern web teknolojileri alanında çalışıyorum. Problem çözmeyi ve bilgimi gerçek projelere aktarmayı seviyorum.'
          : 'Working across automation systems, robotics, and modern web technologies. I care about problem-solving, analytical thinking, and turning knowledge into real-world impact.'}
      </p>
      <div class="hero-chips">
        <span class="chip">📍 Manisa, Turkey</span>
        <span class="chip">🎓 MCBÜ Mekatronik</span>
      </div>
      <div class="hero-actions">
        <a class="btn-primary" href="/resume">{current === 'tr' ? 'Özgeçmişi Görüntüle →' : 'View Resume →'}</a>
        <a class="btn-ghost" href="#contact">{current === 'tr' ? 'İletişime Geç' : 'Get in Touch'}</a>
      </div>
    </div>
    <div class="hero-graphic">
      <div class="geo geo-3"></div>
      <div class="geo geo-1"></div>
      <div class="geo geo-2"></div>
      <div class="label-cluster">
        <div class="label-item">
          <span class="label-icon">⚙</span>
          <span class="label-text">{current === 'tr' ? 'Otomasyon' : 'Automation'}</span>
        </div>
        <div class="label-item">
          <span class="label-icon">◎</span>
          <span class="label-text">{current === 'tr' ? 'Robotik' : 'Robotics'}</span>
        </div>
        <div class="label-item">
          <span class="label-icon">⌁</span>
          <span class="label-text">{current === 'tr' ? 'Web Geliştirme' : 'Web Dev'}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ ABOUT ═══ -->
<section id="about" class="section">
  <div class="section-label">{current === 'tr' ? '— Hakkımda' : '— About'}</div>
  <div class="about-grid">
    <div class="about-text">
      <h2 class="section-heading">{current === 'tr' ? 'Mühendislik & Yazılım' : 'Engineering & Software'}</h2>
      <p>
        {current === 'tr'
          ? 'Manisa Celal Bayar Üniversitesi\'nde Mekatronik Mühendisliği okuyorum. Yazılım ve teknolojiye olan ilgim beni sürekli araştırmaya ve üretmeye yöneltiyor. Özellikle back-end geliştirme ve otomasyon sistemleri üzerine yoğunlaşıyor, farklı projelerde edindiğim deneyimlerle teknik becerilerimi geliştiriyorum.'
          : 'I am studying Mechatronics Engineering at Manisa Celal Bayar University. My passion for software and technology drives me to continuously explore and build. I focus especially on back-end development and automation systems, growing my technical skills through hands-on project experience.'}
      </p>
      <p>
        {current === 'tr'
          ? 'Problem çözmeyi, yeni şeyler öğrenmeyi ve bilgimi gerçek projelere aktarmayı seviyorum. Hem bireysel çalışmalarda hem de ekip projelerinde aktif rol alıyorum.'
          : 'I enjoy problem-solving, learning new things, and applying knowledge to real projects. I take active roles in both independent work and team collaborations.'}
      </p>
    </div>
    <div class="about-aside">
      <div class="aside-stat">
        <span class="stat-num">4</span>
        <span class="stat-label">{current === 'tr' ? 'Proje' : 'Projects'}</span>
      </div>
      <div class="aside-stat">
        <span class="stat-num">3</span>
        <span class="stat-label">{current === 'tr' ? 'Sertifika' : 'Certifications'}</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══ SKILLS ═══ -->
<section id="skills" class="section">
  <div class="section-label">{current === 'tr' ? '— Teknolojiler & Beceriler' : '— Technologies & Skills'}</div>
  <h2 class="section-heading">{current === 'tr' ? 'Araç Setim' : 'My Toolkit'}</h2>
  <div class="skills-layout">
    <div class="skill-group">
      <h3 class="skill-group-title">{current === 'tr' ? 'Programlama Dilleri' : 'Languages'}</h3>
      <div class="skill-pills">
        <span class="pill">JavaScript</span>
        <span class="pill">Python</span>
        <span class="pill">HTML</span>
        <span class="pill">CSS</span>
      </div>
    </div>
    <div class="skill-group">
      <h3 class="skill-group-title">{current === 'tr' ? 'Framework & Kütüphaneler' : 'Frameworks & Libraries'}</h3>
      <div class="skill-pills">
        <span class="pill">SvelteKit</span>
        <span class="pill">Node.js</span>
        <span class="pill">Express</span>
      </div>
    </div>
    <div class="skill-group">
      <h3 class="skill-group-title">{current === 'tr' ? 'Mühendislik Araçları' : 'Engineering Tools'}</h3>
      <div class="skill-pills">
        <span class="pill">SolidWorks</span>
        <span class="pill">TIA Portal</span>
        <span class="pill">DIADesigner</span>
        <span class="pill">DOPSoft</span>
        <span class="pill">ROS2</span>
        <span class="pill">PyTorch</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══ PROJECTS ═══ -->
<section id="projects" class="section">
  <div class="section-label">{current === 'tr' ? '— Projeler' : '— Projects'}</div>
  <h2 class="section-heading">{current === 'tr' ? 'Seçili Çalışmalar' : 'Selected Work'}</h2>
  <div class="projects-list">

    <article class="project-item">
      <div class="project-meta">
        <span class="project-period">2026</span>
        <span class="project-category">{current === 'tr' ? 'Robotik & Simülasyon' : 'Robotics & Simulation'}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">NexusControl Sim</h3>
        <p class="project-desc">
          {current === 'tr'
            ? 'Fanuc LR Mate 200iC robot kolunun URDF modelini manipüle ederek tüm eksenlerde hareket simülasyonu yapar. İleri ve ters kinematik hesaplarını gerçek zamanlı çözer; en hızlı ve en ekonomik yolları karşılaştırır. Anlık voltaj çekimini izler, engel tespitinde çarpışmadan kaçınır, çarpışma anında acil stop tetiklenir — tüm süreç canlı simülasyon ekranında görüntülenir. Yüklenen G-code dosyaları için lazer kesim haritası oluşturur, maliyet ve süre tahmini yapar; işlem hızlandırılmış modda da simüle edilebilir.'
            : 'Simulates full-axis motion of a Fanuc LR Mate 200iC robotic arm via URDF model manipulation. Solves forward and inverse kinematics in real time, comparing the fastest and most energy-efficient paths. Monitors live voltage draw, performs obstacle avoidance and triggers emergency stop on collision — all visualized in a live simulation viewport. Generates laser-cutting maps from loaded G-code files with cost and time estimation; the process can be run in accelerated simulation mode.'}
        </p>
        <div class="project-links">
          <a class="project-link" href="https://github.com/m3rtg/NexusControl-sim" target="_blank" rel="noreferrer">
            GitHub
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </article>

    <article class="project-item">
      <div class="project-meta">
        <span class="project-period">2024 – 2025</span>
        <span class="project-category">GUI / Teknofest</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">{current === 'tr' ? 'UARTEK Hava Savunma Sistemi' : 'UARTEK Air Defence System'}</h3>
        <p class="project-desc">
          {current === 'tr'
            ? 'Galvonometre tabanlı hava savunma sistemi için otonom ve manuel yönetimi sağlayan kullanıcı arayüzünü geliştirdim; Teknofest\'e başvurduk.'
            : 'Developed the user interface enabling autonomous and manual control for a galvanometer-based air defence system; submitted to Teknofest.'}
        </p>
      </div>
    </article>

    <article class="project-item">
      <div class="project-meta">
        <span class="project-period">2023 – 2025</span>
        <span class="project-category">{current === 'tr' ? 'Robotik' : 'Robotics'}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">UARTEK Rover</h3>
        <p class="project-desc">
          {current === 'tr'
            ? 'ERC ve CIRC yarışmalarına başvuran ekipte robot kol geliştirme ve simülasyon hazırlama görevlerinde yer aldım.'
            : 'In the team applying to ERC and CIRC competitions, I worked on robotic arm development and simulation preparation.'}
        </p>
        <div class="project-links">
          <a class="project-link" href="https://www.youtube.com/watch?v=LU82qFIDWTU" target="_blank" rel="noreferrer">
            2024
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <a class="project-link" href="https://www.youtube.com/watch?v=Zjbt3IUMxvc" target="_blank" rel="noreferrer">
            2025
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </article>

    <article class="project-item">
      <div class="project-meta">
        <span class="project-period">2022 – 2023</span>
        <span class="project-category">{current === 'tr' ? 'Otonom Sistemler' : 'Autonomous Systems'}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">{current === 'tr' ? 'Poyraz Robotaksi' : 'Poyraz Robotaxi'}</h3>
        <p class="project-desc">
          {current === 'tr'
            ? 'MCBÜ Bilim ve Teknoloji Kulübü bünyesindeki ekipte aktif rol aldım. "Karaçor" isimli otonom aracımızla Robotaksi-Binek Otonom Araç Yarışması\'nda finalist olduk.'
            : 'Active role in the university team. With our autonomous vehicle "Karaçor" we became finalists in the Robotaxi-Passenger Autonomous Vehicle Competition.'}
        </p>
        <div class="project-links">
          <a class="project-link" href="https://www.youtube.com/watch?v=TmRs7XQ3giY" target="_blank" rel="noreferrer">
            {current === 'tr' ? 'Proje Videosu' : 'Project Video'}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>
    </article>

  </div>
</section>

<!-- ═══ CERTIFICATIONS ═══ -->
<section id="achievements" class="section">
  <div class="section-label">{current === 'tr' ? '— Sertifikalar' : '— Certifications'}</div>
  <h2 class="section-heading">{current === 'tr' ? 'Eğitim & Sertifikalar' : 'Education & Certifications'}</h2>
  <div class="certs-list">

    <div class="cert-row">
      <div class="cert-logo-wrap">
        <img src="/PyTorch.png" alt="PyTorch" class="cert-logo" />
      </div>
      <div class="cert-info">
        <p class="cert-issuer">PyTorch</p>
        <p class="cert-name">{current === 'tr' ? 'Derin Öğrenme & Yapay Zeka' : 'Deep Learning & AI'}</p>
      </div>
    </div>

    <div class="cert-row">
      <div class="cert-logo-wrap">
        <img src="/Node.js.png" alt="Node.js" class="cert-logo" />
      </div>
      <div class="cert-info">
        <p class="cert-issuer">Node.js</p>
        <p class="cert-name">{current === 'tr' ? 'Backend Geliştirme' : 'Backend Development'}</p>
      </div>
    </div>

    <div class="cert-row">
      <div class="cert-logo-wrap">
        <img src="/ROS2.png" alt="ROS2" class="cert-logo" />
      </div>
      <div class="cert-info">
        <p class="cert-issuer">ROS2</p>
        <p class="cert-name">{current === 'tr' ? 'Robot İşletim Sistemi' : 'Robot Operating System'}</p>
      </div>
    </div>

  </div>
</section>

<!-- ═══ CONTACT ═══ -->
<section id="contact" class="section section-contact">
  <div class="section-label">{current === 'tr' ? '— İletişim' : '— Contact'}</div>
  <h2 class="section-heading">{current === 'tr' ? 'Konuşalım' : 'Let\'s Talk'}</h2>
  <p class="contact-intro">
    {current === 'tr'
      ? 'Bir proje, fırsat veya sadece merhaba demek için bana ulaşabilirsiniz.'
      : 'Reach out for a project, an opportunity, or just to say hello.'}
  </p>
  <Contact />
  <div style="height: 4rem"></div>
</section>

<style>
  /* ── Shared ── */
  .section {
    max-width: 960px;
    margin: 0 auto;
    padding: 6rem 2rem 0;
  }
  .section-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--highlight);
    margin-bottom: 1rem;
  }
  .section-heading {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--fg);
    margin-bottom: 2.5rem;
    line-height: 1.15;
  }

  /* ══════════════════════════════
     HERO
  ══════════════════════════════ */
  .hero-section {
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 4rem;
    align-items: center;
    width: 100%;
  }
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  .eyebrow-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--success);
    flex-shrink: 0;
    animation: pulse-dot 5s ease-in-out infinite;
    will-change: transform;
    transform: translateZ(0);
  }
  @keyframes pulse-dot {
    0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.45); }
    50%       { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
  }
  .eyebrow-dot {
    background: var(--success);
  }

  .eyebrow-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--highlight);
  }
  .hero-name {
    font-size: clamp(2.75rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1.05;
    color: var(--fg);
    margin: 0 0 0.75rem;
  }
  .hero-title {
    font-size: 1rem;
    font-weight: 500;
    color: var(--fg-secondary);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .hero-desc {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--fg-secondary);
    margin-bottom: 2rem;
    max-width: 480px;
  }
  .hero-chips {
    display: flex;
    gap: 0.625rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  .chip {
    font-size: 0.8rem;
    color: var(--fg-muted);
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 0.3rem 0.75rem;
  }
  .hero-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .btn-primary {
    display: inline-flex;
    align-items: center;
    background: var(--fg);
    color: var(--bg);
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.7rem 1.4rem;
    border-radius: 10px;
    text-decoration: none;
    transition: opacity 0.18s;
  }
  .btn-primary:hover { opacity: 0.85; }
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    background: transparent;
    color: var(--fg);
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.7rem 1.4rem;
    border-radius: 10px;
    border: 1px solid var(--border);
    text-decoration: none;
    transition: border-color 0.18s, background 0.18s;
  }
  .btn-ghost:hover {
    border-color: var(--border-strong);
    background: var(--bg-secondary);
  }

  /* Hero Graphic */
  .hero-graphic {
    position: relative;
    height: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .geo {
    position: absolute;
    border-radius: 50%;
    opacity: 0.12;
    animation: slow-rotate 20s linear infinite;
    will-change: transform;
    transform: translateZ(0);
    pointer-events: none;
  }
  :root[data-theme="dark"] .geo { opacity: 0.08; }

  .geo-1 {
    width: 280px; height: 280px;
    border: 1.5px solid var(--accent);
  }
  .geo-2 {
    width: 200px; height: 200px;
    border: 1.5px solid var(--highlight);
    animation-duration: 28s;
    animation-direction: reverse;
  }
  .geo-3 {
    width: 340px; height: 340px;
    border: 1px solid var(--border-strong);
    animation-duration: 36s;
    opacity: 0.25;
  }
  @keyframes slow-rotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  .label-cluster {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    isolation: isolate;
  }
  .label-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 0.75rem 1.25rem;
    box-shadow: var(--shadow);
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transform-style: preserve-3d;
    animation: label-float 4s cubic-bezier(0.37, 0.1, 0.63, 0.9) infinite;
  }
  .label-item:nth-child(2) { animation-delay: 0.25s; }
  .label-item:nth-child(3) { animation-delay: 0.5s; }
  @keyframes label-float {
    0%, 100% { transform: translate3d(0, 0, 0); }
    50%       { transform: translate3d(0, -4px, 0); }
  }
  .label-icon {
    font-size: 1.1rem;
    color: var(--highlight);
    line-height: 1;
    font-style: normal;
  }
  .label-text {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--fg);
    letter-spacing: 0.01em;
  }

  /* ══════════════════════════════
     ABOUT
  ══════════════════════════════ */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 220px;
    gap: 4rem;
    align-items: start;
  }
  .about-text p {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--fg-secondary);
    margin-bottom: 1.25rem;
  }
  .about-text p:last-child { margin-bottom: 0; }
  .about-aside {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.75rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 14px;
    box-shadow: var(--shadow);
  }
  .aside-stat {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .stat-num {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--fg);
    line-height: 1;
  }
  .stat-label {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--fg-muted);
  }

  /* ══════════════════════════════
     SKILLS
  ══════════════════════════════ */
  .skills-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2.5rem;
  }
  .skill-group-title {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--fg-muted);
    margin-bottom: 0.875rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border);
  }
  .skill-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .pill {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--fg-secondary);
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.3rem 0.65rem;
    transition: border-color 0.18s, color 0.18s;
  }
  .pill:hover {
    border-color: var(--highlight);
    color: var(--fg);
  }

  /* ══════════════════════════════
     PROJECTS
  ══════════════════════════════ */
  .projects-list {
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
  }
  .project-item {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 2rem;
    padding: 1.75rem 2rem;
    border-bottom: 1px solid var(--border);
    border-left: 3px solid transparent;
    transition: border-color 0.18s, background 0.18s;
  }
  .project-item:last-child { border-bottom: none; }
  .project-item:hover {
    border-left-color: var(--highlight);
    background: var(--accent-subtle);
  }
  .project-meta {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-top: 0.15rem;
  }
  .project-period {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--fg-muted);
    letter-spacing: 0.02em;
  }
  .project-category {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--highlight);
  }
  .project-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--fg);
    margin-bottom: 0.6rem;
    letter-spacing: -0.01em;
  }
  .project-desc {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--fg-secondary);
    margin-bottom: 0.875rem;
  }
  .project-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--fg-muted);
    text-decoration: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.3rem 0.7rem;
    transition: color 0.18s, border-color 0.18s, background 0.18s;
  }
  .project-link:hover {
    color: var(--fg);
    border-color: var(--border-strong);
    background: var(--bg-tertiary);
  }

  /* ══════════════════════════════
     CERTIFICATIONS
  ══════════════════════════════ */
  .certs-list {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
  }
  .cert-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.75rem;
    border-bottom: 1px solid var(--border);
    transition: background 0.18s;
  }
  .cert-row:last-child { border-bottom: none; }
  .cert-row:hover { background: var(--bg-secondary); }
  .cert-logo-wrap {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    overflow: hidden;
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .cert-logo {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
  .cert-info { flex: 1; min-width: 0; }
  .cert-issuer {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--fg);
    margin-bottom: 0.1rem;
  }
  .cert-name {
    font-size: 0.8rem;
    color: var(--fg-muted);
  }

  /* ══════════════════════════════
     CONTACT
  ══════════════════════════════ */
  .section-contact { padding-bottom: 2rem; }
  .contact-intro {
    font-size: 1rem;
    color: var(--fg-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
    max-width: 480px;
  }

  /* ══════════════════════════════
     RESPONSIVE
  ══════════════════════════════ */
  @media (max-width: 768px) {
    .hero-section {
      min-height: auto;
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .hero-graphic {
      height: 310px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .geo-1 {
      width: 220px;
      height: 220px;
    }
    .geo-2 {
      width: 160px;
      height: 160px;
    }
    .geo-3 {
      width: 280px;
      height: 280px;
    }
    .label-cluster {
      gap: 0.6rem;
    }
    .label-item {
      padding: 0.65rem 1.1rem;
    }
    .about-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .project-item {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    .project-meta { flex-direction: row; align-items: center; }
    .section { padding: 3.5rem 1.25rem 0; }
  }
</style>