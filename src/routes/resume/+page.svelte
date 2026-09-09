<script>
  import { lang } from '$lib/stores';
  import { onMount } from 'svelte';
  
  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="resume-page">

  <div class="page-header">
    <div class="section-label">{#if $lang === "tr"}— Özgeçmiş{:else}— Resume{/if}</div>
    <h1>{#if $lang === "tr"}Özgeçmişim{:else}My Resume{/if}</h1>
    <p class="header-sub">
      {#if $lang === "tr"}
        PDF formatında özgeçmişimi indirmek için aşağıdaki butona tıklayabilirsiniz.
      {:else}
        Click the button below to download my resume in PDF format.
      {/if}
    </p>
    <a
      href={$lang === "tr" ? "/resume-tr.pdf" : "/resume-en.pdf"}
      download={$lang === "tr" ? "Mert_Gorgulu_Ozgecmis.pdf" : "Mert_Gorgulu_Resume.pdf"}
      target="_blank"
      rel="noreferrer"
      class="btn-download"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      {#if $lang === "tr"}PDF İndir{:else}Download PDF{/if}
    </a>
  </div>

  <div class="resume-content">
    
    <section class="cv-section">
      <h2>{#if $lang === "tr"}Eğitim{:else}Education{/if}</h2>
      <div class="cv-item">
        <div class="cv-meta">
          <span class="cv-date">2022 — {#if $lang === "tr"}Devam Ediyor{:else}Present{/if}</span>
          <span class="cv-place">Manisa Celal Bayar {#if $lang === "tr"}Üniversitesi{:else}University{/if}</span>
        </div>
        <div class="cv-details">
          <h3>{#if $lang === "tr"}Mekatronik Mühendisliği{:else}Mechatronics Engineering{/if}</h3>
          <p>{#if $lang === "tr"}Lisans Eğitimi{:else}Bachelor's Degree{/if}</p>
        </div>
      </div>
    </section>

    <section class="cv-section">
      <h2>{#if $lang === "tr"}Projeler{:else}Projects{/if}</h2>

      <div class="cv-item">
        <div class="cv-meta">
          <span class="cv-date">2026</span>
          <span class="cv-place">NexusControl Sim</span>
        </div>
        <div class="cv-details">
          <h3>{#if $lang === "tr"}Robotik & Simülasyon{:else}Robotics & Simulation{/if}</h3>
          <p>
            {#if $lang === "tr"}
              Fanuc LR Mate 200iC robot kolunun URDF modelini manipüle ederek tüm eksenlerde hareket simülasyonu yapar. İleri ve ters kinematik hesaplarını gerçek zamanlı çözer; en hızlı ve en ekonomik yolları karşılaştırır. Anlık voltaj çekimini izler, engel tespitinde çarpışmadan kaçınır, çarpışma anında acil stop tetiklenir — tüm süreç canlı simülasyon ekranında görüntülenir. Yüklenen G-code dosyaları için lazer kesim haritası oluşturur, maliyet ve süre tahmini yapar; işlem hızlandırılmış modda da simüle edilebilir.
            {:else}
              Simulates full-axis motion of a Fanuc LR Mate 200iC robotic arm via URDF model manipulation. Solves forward and inverse kinematics in real time, comparing the fastest and most energy-efficient paths. Monitors live voltage draw, performs obstacle avoidance and triggers emergency stop on collision — all visualized in a live simulation viewport. Generates laser-cutting maps from loaded G-code files with cost and time estimation; the process can be run in accelerated simulation mode.
            {/if}
          </p>
        </div>
      </div>

      <div class="cv-item">
        <div class="cv-meta">
          <span class="cv-date">2024 — 2025</span>
          <span class="cv-place">UARTEK Hava Savunma Sistemi</span>
        </div>
        <div class="cv-details">
          <h3>{#if $lang === "tr"}GUI / Teknofest{:else}GUI / Teknofest{/if}</h3>
          <p>
            {#if $lang === "tr"}
              Galvonometre tabanlı hava savunma sistemi için otonom ve manuel yönetimi sağlayan kullanıcı arayüzünü geliştirdim; Teknofest'e başvurduk.
            {:else}
              Developed the user interface enabling autonomous and manual control for a galvanometer-based air defence system; submitted to Teknofest.
            {/if}
          </p>
        </div>
      </div>

      <div class="cv-item">
        <div class="cv-meta">
          <span class="cv-date">2023 — 2025</span>
          <span class="cv-place">UARTEK Rover</span>
        </div>
        <div class="cv-details">
          <h3>{#if $lang === "tr"}Robotik{:else}Robotics{/if}</h3>
          <p>
            {#if $lang === "tr"}
              ERC ve CIRC yarışmalarına başvuran ekipte robot kol geliştirme ve simülasyon hazırlama görevlerinde yer aldım.
            {:else}
              In the team applying to ERC and CIRC competitions, I worked on robotic arm development and simulation preparation.
            {/if}
          </p>
        </div>
      </div>

      <div class="cv-item">
        <div class="cv-meta">
          <span class="cv-date">2022 — 2023</span>
          <span class="cv-place">Poyraz Robotaksi</span>
        </div>
        <div class="cv-details">
          <h3>{#if $lang === "tr"}Otonom Sistemler{:else}Autonomous Systems{/if}</h3>
          <p>
            {#if $lang === "tr"}
              MCBÜ Bilim ve Teknoloji Kulübü bünyesindeki ekipte aktif rol aldım. "Karaçor" isimli otonom aracımızla Robotaksi-Binek Otonom Araç Yarışması'nda finalist olduk.
            {:else}
              Active role in the university team. With our autonomous vehicle "Karaçor" we became finalists in the Robotaxi-Passenger Autonomous Vehicle Competition.
            {/if}
          </p>
        </div>
      </div>
    </section>

    <section class="cv-section">
      <h2>{#if $lang === "tr"}Yetenekler{:else}Skills{/if}</h2>
      <div class="cv-skills">
        <div class="skill-category">
          <h3>{#if $lang === "tr"}Yazılım Geliştirme{:else}Software Dev{/if}</h3>
          <ul>
            <li>JavaScript (Node.js, SvelteKit, Express)</li>
            <li>Python (PyTorch)</li>
            <li>HTML & CSS</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>{#if $lang === "tr"}Otomasyon & Robotik{:else}Automation & Robotics{/if}</h3>
          <ul>
            <li>ROS2</li>
            <li>TIA Portal</li>
            <li>DIADesigner, DOPSoft</li>
            <li>SolidWorks</li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</div>

<style>
  .resume-page {
    max-width: 860px;
    margin: 0 auto;
    padding: 6rem 2rem 4rem;
  }
  
  .page-header {
    margin-bottom: 4rem;
  }
  
  .section-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--highlight);
    margin-bottom: 1rem;
  }
  
  .page-header h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--fg);
    margin-bottom: 1rem;
  }
  
  .header-sub {
    font-size: 1.1rem;
    color: var(--fg-secondary);
    margin-bottom: 2rem;
    max-width: 500px;
    line-height: 1.6;
  }
  
  .btn-download {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--fg);
    color: var(--bg);
    padding: 0.8rem 1.6rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
  }
  
  .btn-download:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  /* ═══ Content layout ═══ */
  .resume-content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  
  .cv-section h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--fg);
    margin-bottom: 2rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border);
  }

  .cv-item {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  
  .cv-item:last-child {
    margin-bottom: 0;
  }

  .cv-meta {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .cv-date {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--fg-muted);
  }

  .cv-place {
    font-size: 1rem;
    font-weight: 600;
    color: var(--fg);
  }

  .cv-details h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--highlight);
    margin-bottom: 0.6rem;
  }

  .cv-details p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--fg-secondary);
  }

  /* Skills grid */
  .cv-skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 3rem;
  }

  .skill-category h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--fg);
    margin-bottom: 1rem;
  }

  .skill-category ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .skill-category li {
    font-size: 0.95rem;
    color: var(--fg-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .skill-category li::before {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--highlight);
  }

  @media (max-width: 768px) {
    .cv-item {
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
    .resume-page {
      padding: 4rem 1.5rem;
    }
  }
</style>
