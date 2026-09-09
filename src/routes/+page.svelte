<script>
  import { lang } from '$lib/stores';
  import Contact from './contact/+page.svelte';
  $: current = $lang;
</script>

<svelte:head>
  <meta name="description" content={current === 'tr'
    ? 'Ben Mert, Manisa Celal Bayar Ãœniversitesi Mekatronik MÃ¼hendisliÄŸi Ã¶ÄŸrencisiyim. Back-end geliÅŸtirme ve otomasyon sistemleri Ã¼zerine Ã§alÄ±ÅŸÄ±yorum.'
    : 'I am Mert, a Mechatronics Engineering student at Manisa Celal Bayar University. I focus on back-end development and automation systems.'} />
</svelte:head>

<!-- â•â•â• HERO â•â•â• -->
<section id="top" class="hero">
  <div class="hero-inner">
    <div class="hero-eyebrow">
      <span class="eyebrow-dot"></span>
      <span>{current === 'tr' ? 'Staj iÃ§in uygun' : 'Available for internship'}</span>
    </div>
    <h1 class="hero-name">Mert GÃ¶rgÃ¼lÃ¼</h1>
    <p class="hero-title">
      {current === 'tr' ? 'Mekatronik MÃ¼hendisliÄŸi Ã–ÄŸrencisi' : 'Mechatronics Engineering Student'}
      <span class="title-separator">Â·</span>
      {current === 'tr' ? 'Full-Stack GeliÅŸtirici' : 'Full-Stack Developer'}
    </p>
    <p class="hero-bio">
      {current === 'tr'
        ? 'Otomasyon sistemleri, robotik ve modern web teknolojileri alanÄ±nda Ã§alÄ±ÅŸÄ±yorum. Problem Ã§Ã¶zmeyi, analitik dÃ¼ÅŸÃ¼nmeyi ve Ã¶ÄŸrendiklerimi gerÃ§ek dÃ¼nya projelerine aktarmayÄ± Ã¶nemsiyorum.'
        : 'Working across automation systems, robotics, and modern web technologies. I care about problem-solving, analytical thinking, and turning knowledge into real-world impact.'}
    </p>
    <div class="hero-meta">
      <span class="meta-chip">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Manisa, Turkey
      </span>
      <span class="meta-chip">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        {current === 'tr' ? 'MCBÃœ Mekatronik' : 'MCBU Mechatronics'}
      </span>
    </div>
    <div class="hero-cta">
      <a href="/resume" class="btn-primary">
        {current === 'tr' ? 'Ã–zgeÃ§miÅŸi GÃ¶rÃ¼ntÃ¼le' : 'View Resume'}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="/#contact" class="btn-ghost">{current === 'tr' ? 'Ä°letiÅŸime GeÃ§' : 'Get in Touch'}</a>
    </div>
  </div>
  <div class="hero-graphic" aria-hidden="true">
    <div class="geo geo-1"></div>
    <div class="geo geo-2"></div>
    <div class="geo geo-3"></div>
    <div class="label-cluster">
      <div class="label-item">
        <span class="label-icon">âš™</span>
        <span class="label-text">{current === 'tr' ? 'Otomasyon' : 'Automation'}</span>
      </div>
      <div class="label-item">
        <span class="label-icon">â—</span>
        <span class="label-text">{current === 'tr' ? 'Robotik' : 'Robotics'}</span>
      </div>
      <div class="label-item">
        <span class="label-icon">âŒ</span>
        <span class="label-text">{current === 'tr' ? 'Web GeliÅŸtirme' : 'Web Dev'}</span>
      </div>
    </div>
  </div>
</section>

<!-- â•â•â• ABOUT â•â•â• -->
<section id="about" class="section">
  <div class="section-label">{current === 'tr' ? 'â€” HakkÄ±mda' : 'â€” About'}</div>
  <div class="about-grid">
    <div class="about-text">
      <h2 class="section-heading">{current === 'tr' ? 'MÃ¼hendislik & YazÄ±lÄ±m' : 'Engineering & Software'}</h2>
      <p>
        {current === 'tr'
          ? 'Manisa Celal Bayar Ãœniversitesi\'nde Mekatronik MÃ¼hendisliÄŸi okuyorum. YazÄ±lÄ±m ve teknolojiye olan ilgim beni sÃ¼rekli araÅŸtÄ±rmaya ve Ã¼retmeye yÃ¶neltiyor. Ã–zellikle back-end geliÅŸtirme ve otomasyon sistemleri Ã¼zerine yoÄŸunlaÅŸÄ±yor, farklÄ± projelerde edindiÄŸim deneyimlerle teknik becerilerimi geliÅŸtiriyorum.'
          : 'I am studying Mechatronics Engineering at Manisa Celal Bayar University. My passion for software and technology drives me to continuously explore and build. I focus especially on back-end development and automation systems, growing my technical skills through hands-on project experience.'}
      </p>
      <p>
        {current === 'tr'
          ? 'Problem Ã§Ã¶zmeyi, yeni ÅŸeyler Ã¶ÄŸrenmeyi ve bilgimi gerÃ§ek projelere aktarmayÄ± seviyorum. Hem bireysel Ã§alÄ±ÅŸmalarda hem de ekip projelerinde aktif rol alÄ±yorum.'
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

<!-- â•â•â• SKILLS â•â•â• -->
<section id="skills" class="section">
  <div class="section-label">{current === 'tr' ? 'â€” Teknolojiler & Beceriler' : 'â€” Technologies & Skills'}</div>
  <h2 class="section-heading">{current === 'tr' ? 'AraÃ§ Setim' : 'My Toolkit'}</h2>
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
      <h3 class="skill-group-title">{current === 'tr' ? 'Web Teknolojileri' : 'Web Stack'}</h3>
      <div class="skill-pills">
        <span class="pill">SvelteKit</span>
        <span class="pill">Node.js</span>
        <span class="pill">Express</span>
      </div>
    </div>
    <div class="skill-group">
      <h3 class="skill-group-title">{current === 'tr' ? 'MÃ¼hendislik AraÃ§larÄ±' : 'Engineering Tools'}</h3>
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

<!-- â•â•â• PROJECTS â•â•â• -->
<section id="projects" class="section">
  <div class="section-label">{current === 'tr' ? 'â€” Projeler' : 'â€” Projects'}</div>
  <h2 class="section-heading">{current === 'tr' ? 'SeÃ§ili Ã‡alÄ±ÅŸmalar' : 'Selected Work'}</h2>
  <div class="projects-list">

    <article class="project-item">
      <div class="project-meta">
        <span class="project-period">2025</span>
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


<!-- â•â•â• CERTIFICATIONS â•â•â• -->
<section id="achievements" class="section">
  <div class="section-label">{current === 'tr' ? 'â€” Sertifikalar' : 'â€” Certifications'}</div>
  <h2 class="section-heading">{current === 'tr' ? 'EÄŸitim & Sertifikalar' : 'Education & Certifications'}</h2>
  <div class="certs-list">

    <div class="cert-row">
      <div class="cert-logo-wrap">
        <img src="/PyTorch.png" alt="PyTorch" class="cert-logo" />
      </div>
      <div class="cert-info">
        <p class="cert-issuer">PyTorch</p>
        <p class="cert-name">{current === 'tr' ? 'Derin Ã–ÄŸrenme & Yapay Zeka' : 'Deep Learning & AI'}</p>
      </div>
      <span class="cert-badge" style="display:none">{current === 'tr' ? 'Sertifika' : 'Certificate'}</span>
    </div>

    <div class="cert-row">
      <div class="cert-logo-wrap">
        <img src="/Node.js.png" alt="Node.js" class="cert-logo" />
      </div>
      <div class="cert-info">
        <p class="cert-issuer">Node.js</p>
        <p class="cert-name">{current === 'tr' ? 'Backend GeliÅŸtirme' : 'Backend Development'}</p>
      </div>
      <span class="cert-badge" style="display:none">{current === 'tr' ? 'Sertifika' : 'Certificate'}</span>
    </div>

    <div class="cert-row">
      <div class="cert-logo-wrap">
        <img src="/ROS2.png" alt="ROS2" class="cert-logo" />
      </div>
      <div class="cert-info">
        <p class="cert-issuer">ROS2</p>
        <p class="cert-name">{current === 'tr' ? 'Robot Ä°ÅŸletim Sistemi' : 'Robot Operating System'}</p>
      </div>
      <span class="cert-badge" style="display:none">{current === 'tr' ? 'Sertifika' : 'Certificate'}</span>
    </div>

  </div>
</section>

<!-- â•â•â• CONTACT â•â•â• -->
<section id="contact" class="section section-contact">
  <div class="section-label">{current === 'tr' ? 'â€” Ä°letiÅŸim' : 'â€” Contact'}</div>
  <h2 class="section-heading">{current === 'tr' ? 'KonuÅŸalÄ±m' : 'Let\'s Talk'}</h2>
  <p class="contact-intro">
    {current === 'tr'
      ? 'Bir proje, fÄ±rsat veya sadece merhaba demek iÃ§in bana ulaÅŸabilirsiniz.'
      : 'Reach out for a project, an opportunity, or just to say hello.'}
  </p>
  <Contact />
  <div style="height: 4rem"></div>
</section>

<style>
  /* â”€â”€ Shared â”€â”€ */
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

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     HERO
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  .hero {
    min-height: calc(100vh - 72px);
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 4rem;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--success);
    letter-spacing: 0.04em;
    margin-bottom: 1.25rem;
  }
  .eyebrow-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--success);
    flex-shrink: 0;
    animation: pulse-dot 2.5s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.45); }
    50%       { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
  }
  :root[data-theme="dark"] .eyebrow-dot {
    background: var(--success);
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
    margin: 0 0 1.5rem;
    letter-spacing: 0.01em;
  }
  .title-separator {
    margin: 0 0.5em;
    color: var(--border-strong);
  }

  .hero-bio {
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--fg-secondary);
    max-width: 520px;
    margin: 0 0 2rem;
  }

  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
  .meta-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--fg-muted);
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 0.3rem 0.75rem;
  }

  .hero-cta {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--fg);
    color: var(--bg);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.7rem 1.4rem;
    border-radius: 8px;
    transition: opacity 0.2s, transform 0.2s;
    letter-spacing: 0.01em;
  }
  .btn-primary:hover { opacity: 0.85; transform: translateY(-1px); }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--fg-secondary);
    padding: 0.7rem 1.2rem;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
    letter-spacing: 0.01em;
  }
  .btn-ghost:hover {
    color: var(--fg);
    border-color: var(--border-strong);
    background: var(--accent-subtle);
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
    border: 1px dashed var(--border-strong);
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
    animation: label-float 5s ease-in-out infinite;
    will-change: transform;
    transform: translateZ(0);
  }
  .label-item:nth-child(2) { animation-delay: 1.65s; }
  .label-item:nth-child(3) { animation-delay: 3.3s; }
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

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     ABOUT
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
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
    gap: 0.25rem;
  }
  .stat-num {
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--fg);
    line-height: 1;
  }
  .stat-label {
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--fg-muted);
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     SKILLS
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  .skills-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
  }
  .skill-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .skill-group-title {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--fg-muted);
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border);
    margin: 0;
  }
  .skill-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .pill {
    display: inline-block;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--fg-secondary);
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.35rem 0.75rem;
    transition: color 0.18s, border-color 0.18s, background 0.18s;
    letter-spacing: 0.01em;
  }
  .pill:hover {
    color: var(--fg);
    border-color: var(--highlight);
    background: var(--highlight-subtle);
  }

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     PROJECTS
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    background: var(--bg-secondary);
    box-shadow: var(--shadow);
  }
  .project-item {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 0;
    padding: 2rem 2rem;
    border-bottom: 1px solid var(--border);
    transition: background 0.2s;
    position: relative;
  }
  .project-item:last-child { border-bottom: none; }
  .project-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: transparent;
    transition: background 0.25s;
  }
  .project-item:hover {
    background: var(--accent-subtle);
  }
  .project-item:hover::before {
    background: var(--highlight);
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
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
  }
  .project-category {
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--highlight);
  }
  .project-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .project-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--fg);
    margin: 0;
    letter-spacing: -0.02em;
  }
  .project-desc {
    font-size: 0.93rem;
    line-height: 1.7;
    color: var(--fg-secondary);
    margin: 0;
  }
  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: 0.25rem;
  }
  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--fg-muted);
    text-decoration: none;
    letter-spacing: 0.03em;
    transition: color 0.18s;
  }
  .project-link:hover { color: var(--highlight); }

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     CERTIFICATIONS
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  .certs-list {
    display: flex;
    flex-direction: column;
    gap: 0;
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    background: var(--bg-secondary);
    box-shadow: var(--shadow);
  }
  .cert-row {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem 1.75rem;
    border-bottom: 1px solid var(--border);
    transition: background 0.2s;
  }
  .cert-row:last-child { border-bottom: none; }
  .cert-row:hover { background: var(--accent-subtle); }
  .cert-logo-wrap {
    width: 44px;
    height: 44px;
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 6px;
  }
  .cert-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .cert-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }
  .cert-issuer {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--fg);
    margin: 0;
    letter-spacing: -0.01em;
  }
  .cert-name {
    font-size: 0.82rem;
    color: var(--fg-muted);
    margin: 0;
  }
  .cert-badge {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--highlight);
    background: var(--highlight-subtle);
    border: 1px solid rgba(var(--highlight-rgb), 0.25);
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
    flex-shrink: 0;
  }

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     CONTACT
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  .section-contact { padding-bottom: 2rem; }
  .contact-intro {
    font-size: 1rem;
    color: var(--fg-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     RESPONSIVE
  â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      min-height: auto;
      padding-top: 3rem;
    }
    .hero-graphic { display: none; }
    .about-grid {
      grid-template-columns: 1fr;
    }
    .about-aside {
      flex-direction: row;
      gap: 1.5rem;
      padding: 1.25rem 1.5rem;
    }
    .aside-stat { flex: 1; align-items: center; text-align: center; }
  }

  @media (max-width: 640px) {
    .section { padding: 4rem 1.25rem 0; }
    .hero { padding: 2.5rem 1.25rem; }
    .hero-name { font-size: 2.25rem; }
    .section-heading { font-size: 1.6rem; }
    .project-item {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    .project-meta { flex-direction: row; align-items: center; gap: 0.75rem; }
    .cert-row { padding: 1rem 1.25rem; }
    .cert-badge { display: none; }
    .skills-layout { grid-template-columns: 1fr; }
  }

  @media (max-width: 480px) {
    .hero-title { font-size: 0.9rem; }
    .hero-bio { font-size: 0.95rem; }
    .btn-primary, .btn-ghost { font-size: 0.85rem; padding: 0.65rem 1.1rem; }
  }
</style>