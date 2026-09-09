<script>
  import { lang } from '$lib/stores';
  import { onMount } from 'svelte';
  
  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="resume-page">

  <div class="page-header">
    <div class="section-label">{#if $lang === "tr"}â€” Ã–zgeÃ§miÅŸ{:else}â€” Resume{/if}</div>
    <h1>{#if $lang === "tr"}Ã–zgeÃ§miÅŸim{:else}My Resume{/if}</h1>
    <p class="header-sub">
      {#if $lang === "tr"}
        PDF formatÄ±nda Ã¶zgeÃ§miÅŸimi indirmek iÃ§in aÅŸaÄŸÄ±daki butona tÄ±klayabilirsiniz.
      {:else}
        Click the button below to download my resume in PDF format.
      {/if}
    </p>
    <a
      href={$lang === "tr" ? "/resume-tr.pdf" : "/resume-en.pdf"}
      download={$lang === "tr" ? "Mert_Gorgulu_Ozgecmis.pdf" : "Mert_Gorgulu_Resume.pdf"}
      target="_blank"
      class="download-btn"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      {#if $lang === "tr"}PDF Olarak Ä°ndir{:else}Download PDF{/if}
    </a>
  </div>

  <div class="divider"></div>

  <div class="projects-section">
    <div class="section-label">{#if $lang === "tr"}â€” Projelerim{:else}â€” My Projects{/if}</div>
    <h2>{#if $lang === "tr"}Ã‡alÄ±ÅŸmalar{:else}Work{/if}</h2>

    <div class="projects-list">

      <article class="project-item">
        <div class="project-meta">
          <span class="project-period">2025</span>
          <span class="project-tag">{#if $lang === "tr"}Robotik &amp; Simülasyon{:else}Robotics &amp; Simulation{/if}</span>
        </div>
        <div class="project-body">
          <h3>NexusControl Sim</h3>
          <p>
            {#if $lang === "tr"}
              Fanuc LR Mate 200iC robot kolunun URDF modelini manipüle ederek tüm eksenlerde hareket simülasyonu yapar. İleri ve ters kinematik hesaplarını gerçek zamanlı çözer; en hızlı ve en ekonomik yolları karşılaştırır. Anlık voltaj çekimini izler, engel tespitinde çarpışmadan kaçınır, çarpışma anında acil stop tetiklenir — tüm süreç canlı simülasyon ekranında görüntülenir. Yüklenen G-code dosyaları için lazer kesim haritası oluşturur, maliyet ve süre tahmini yapar; işlem hızlandırılmış modda da simüle edilebilir.
            {:else}
              Simulates full-axis motion of a Fanuc LR Mate 200iC robotic arm via URDF model manipulation. Solves forward and inverse kinematics in real time, comparing the fastest and most energy-efficient paths. Monitors live voltage draw, performs obstacle avoidance and triggers emergency stop on collision — all visualized in a live simulation viewport. Generates laser-cutting maps from loaded G-code files with cost and time estimation; the process can be run in accelerated simulation mode.
            {/if}
          </p>
          <div class="project-links">
            <a href="https://github.com/m3rtg/NexusControl-sim" target="_blank" class="ext-link">
              GitHub
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </article>

      <article class="project-item">
        <div class="project-meta">
          <span class="project-period">2024 – 2025</span>
          <span class="project-tag">GUI / Teknofest</span>
        </div>
        <div class="project-body">
          <h3>{#if $lang === "tr"}UARTEK Hava Savunma Sistemi{:else}UARTEK Air Defence System{/if}</h3>
          <p>
            {#if $lang === "tr"}
              2024-2025 yılları arasında Manisa Celal Bayar Üniversitesi Proje ve İnovasyon Kulübü bünyesinde faaliyet gösteren UARTEK ekibinde görev aldım. Galvonometre sistemine dayalı bir hava savunma sistemi tasarlayarak Teknofest yarışmasına başvuruda bulunduk. Sistemin hem otonom hem de manuel yönetimini sağlayan kullanıcı arayüzünün geliştirilmesinden sorumlu oldum.
            {:else}
              Between 2024 and 2025, I took part in the UARTEK team operating under the Project and Innovation Club at Manisa Celal Bayar University. We designed a galvanometer-based air defense system and submitted it to the Teknofest competition. I was responsible for developing the user interface that enabled both autonomous and manual control of the system.
            {/if}
          </p>
        </div>
      </article>

      <article class="project-item">
        <div class="project-meta">
          <span class="project-period">2023 – 2025</span>
          <span class="project-tag">{#if $lang === "tr"}Robotik{:else}Robotics{/if}</span>
        </div>
        <div class="project-body">
          <h3>UARTEK Rover</h3>
          <p>
            {#if $lang === "tr"}
              2023-2025 yılları arasında Manisa Celal Bayar Üniversitesi Proje ve İnovasyon Kulübü bünyesinde yer alan UARTEK Rover Takımı'nda aktif olarak görev aldım. ERC (European Rover Challenge) ve CIRC (Canadian International Rover Challenge) yarışmalarına başvuruda bulunduk. Robot kolun geliştirilmesi ve sanal ortam simülasyonlarının hazırlanmasıyla ilgili görevlerde yer aldım.
            {:else}
              Between 2023 and 2025, I actively took part in the UARTEK Rover Team under the Project and Innovation Club at Manisa Celal Bayar University. We applied to participate in the ERC (European Rover Challenge) and CIRC (Canadian International Rover Challenge) competitions. I contributed to tasks related to the development of the robotic arm and the preparation of virtual environment simulations.
            {/if}
          </p>
          <div class="project-links">
            <a href="https://www.youtube.com/watch?v=LU82qFIDWTU&ab_channel=UartekRoverTeam" target="_blank" class="ext-link">
              2024
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            <a href="https://www.youtube.com/watch?v=Zjbt3IUMxvc&ab_channel=UartekRoverTeam" target="_blank" class="ext-link">
              2025
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </article>

      <article class="project-item">
        <div class="project-meta">
          <span class="project-period">2022 – 2023</span>
          <span class="project-tag">{#if $lang === "tr"}Otonom Araç{:else}Autonomous Vehicle{/if}</span>
        </div>
        <div class="project-body">
          <h3>{#if $lang === "tr"}Poyraz Robotaksi{:else}Poyraz Robotaxi{/if}</h3>
          <p>
            {#if $lang === "tr"}
              2022-2023 yılları arasında Manisa Celal Bayar Üniversitesi Bilim ve Teknoloji Kulübü bünyesinde faaliyet gösteren Poyraz Robotaksi ekibinde aktif olarak görev aldım. "Karaçor" isimli otonom aracımız ile Robotaksi-Binek Otonom Araç Yarışması'na katılım sağladık ve finalist olma başarısı elde ettik.
            {:else}
              Between 2022 and 2023, I actively took part in the Poyraz Robotaksi team operating under the Science and Technology Club of Manisa Celal Bayar University. We participated in the Robotaxi-Passenger Autonomous Vehicle Competition with our autonomous vehicle named 'Karaçor' and achieved the success of becoming a finalist.
            {/if}
          </p>
          <div class="project-links">
            <a href="https://www.youtube.com/watch?v=TmRs7XQ3giY&ab_channel=PoyrazRobotaksi" target="_blank" class="ext-link">
              {#if $lang === "tr"}Proje Videosu{:else}Project Video{/if}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </article>

    </div>
  </div>

</div>

<style>
  :global(body) {
    overflow-y: auto;
  }

  .resume-page {
    max-width: 860px;
    margin: 0 auto;
    padding: 4rem 2rem 6rem;
    color: var(--fg);
    min-height: 100vh;
  }

  /* â”€â”€ Header â”€â”€ */
  .page-header {
    padding-top: 2rem;
    margin-bottom: 3rem;
  }
  .section-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--highlight);
    margin-bottom: 0.875rem;
  }
  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--fg);
    margin: 0 0 0.875rem;
    line-height: 1.05;
  }
  .header-sub {
    font-size: 1rem;
    color: var(--fg-secondary);
    line-height: 1.65;
    max-width: 480px;
    margin: 0 0 2rem;
  }
  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--fg);
    color: var(--bg);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.7rem 1.4rem;
    border-radius: 8px;
    letter-spacing: 0.01em;
    transition: opacity 0.2s, transform 0.2s;
  }
  .download-btn:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  /* â”€â”€ Divider â”€â”€ */
  .divider {
    height: 1px;
    background: var(--border);
    margin-bottom: 3.5rem;
  }

  /* â”€â”€ Projects â”€â”€ */
  .projects-section { margin-top: 0; }
  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--fg);
    margin: 0 0 2rem;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    background: var(--bg-secondary);
    box-shadow: var(--shadow);
  }

  .project-item {
    display: grid;
    grid-template-columns: 160px 1fr;
    padding: 2rem;
    border-bottom: 1px solid var(--border);
    position: relative;
    transition: background 0.2s;
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
    letter-spacing: 0.02em;
    font-variant-numeric: tabular-nums;
  }
  .project-tag {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--highlight);
  }

  .project-body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .project-body h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--fg);
    margin: 0;
    letter-spacing: -0.02em;
  }
  .project-body p {
    font-size: 0.93rem;
    line-height: 1.75;
    color: var(--fg-secondary);
    margin: 0;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: 0.25rem;
  }
  .ext-link {
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
  .ext-link:hover { color: var(--highlight); }

  /* â”€â”€ Responsive â”€â”€ */
  @media (max-width: 640px) {
    .resume-page { padding: 2rem 1.25rem 4rem; }
    .project-item {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
    .project-meta {
      flex-direction: row;
      align-items: center;
      gap: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    h1 { font-size: 1.75rem; }
    h2 { font-size: 1.35rem; }
    .download-btn { font-size: 0.825rem; }
  }
</style>

