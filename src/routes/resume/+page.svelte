<script>
  import { lang, theme } from '$lib/stores';
  import { onMount } from 'svelte';
  
  onMount(() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="resume-page">
  <h1>
    {#if $lang === "tr"} Öz Geçmiş {:else} Resume {/if}
  </h1>

  <p class="intro">
    {#if $lang === "tr"}
      Merhabalar 👋 Buradan 
      <a 
        href="/resume-tr.pdf" 
        download="Mert_Gorgulu_Ozgecmis.pdf"
        target="_blank" 
        class="resume-link"
      >
        öz geçmiş dosyama
      </a> 
      ulaşabilir ve aşağıdan parçası olduğum projeler hakkında detaylı bilgi alabilirsiniz.
    {:else}
      Hello 👋 From here you can get access to
      <a 
        href="/resume-en.pdf" 
        download="Mert_Gorgulu_Resume.pdf"
        target="_blank" 
        class="resume-link"
      >
        my resume file,
      </a> 
      and below you can get detailed information about the projects I have participated in.
    {/if}
  </p>

  <h2>{#if $lang === "tr"} Projelerim {:else} My Projects {/if}</h2>

  <!-- İlk Kart -->
  <div class="single-card">
    <h3>{#if $lang === "tr"} Poyraz Robotaksi {:else} Poyraz Robotaxi {/if}</h3>
    <p>
      {#if $lang === "tr"}
        2022-2023 yılları arasında Manisa Celal Bayar Üniversitesi Bilim ve Teknoloji Kulübü bünyesinde 
        faaliyet gösteren Poyraz Robotaksi ekibinde aktif olarak görev aldım. Bu süreçte, ‘Karaçor’ isimli 
        otonom aracımız ile Robotaksi-Binek Otonom Araç Yarışması’na katılım sağladık ve finalist olma başarısı 
        elde ettik.
      {:else}
        Between 2022 and 2023, I actively took part in the Poyraz Robotaksi team operating under the Science and 
        Technology Club of Manisa Celal Bayar University. During this period, we participated in the 
        Robotaxi-Passenger Autonomous Vehicle Competition with our autonomous vehicle named ‘Karaçor’ and achieved 
        the success of becoming a finalist.
      {/if}
    </p>

    <div class="extra-content">
      <a href="https://www.youtube.com/watch?v=TmRs7XQ3giY&ab_channel=PoyrazRobotaksi" 
         target="_blank">
        {#if $lang === "tr"} Proje Videosu ↗ {:else} Project Video ↗ {/if}
      </a>
    </div>
  </div>

  <!-- İkinci Kart -->
  <div class="single-card">
    <h3>{#if $lang === "tr"} UARTEK Rover {:else} UARTEK Rover {/if}</h3>
    <p>
      {#if $lang === "tr"}
        2023-2025 yılları arasında Manisa Celal Bayar Üniversitesi Proje ve İnovasyon Kulübü bünyesinde yer alan 
        UARTEK Rover Takımı’nda aktif olarak görev aldım. Bu süre zarfında, ERC (European Rover Challenge) ve CIRC 
        (Canadian International Rover Challenge) yarışmalarına başvuruda bulunduk. Ekip içerisinde özellikle robot 
        kolun geliştirilmesi ve sanal ortam simülasyonlarının hazırlanmasıyla ilgili görevlerde yer aldım.
      {:else}  
        Between 2023 and 2025, I actively took part in the UARTEK Rover Team under the Project and Innovation Club at 
        Manisa Celal Bayar University. During this period, we applied to participate in the ERC (European Rover 
        Challenge) and CIRC (Canadian International Rover Challenge) competitions. Within the team, I contributed to 
        tasks related to the development of the robotic arm and the preparation of virtual environment simulations.
      {/if}
    </p>

    <div class="extra-content">
      <a href="https://www.youtube.com/watch?v=LU82qFIDWTU&ab_channel=UartekRoverTeam" target="_blank">
        {#if $lang === "tr"} 2024 Proje Videosu ↗ {:else} 2024 Project Video ↗ {/if}
      </a>
      <a href="https://www.youtube.com/watch?v=Zjbt3IUMxvc&ab_channel=UartekRoverTeam" target="_blank">
      {#if $lang === "tr"} 2025 Proje Videosu ↗ {:else} 2025 Project Video ↗ {/if}
      </a>
    </div>
  </div>

  <!-- Üçüncü Kart -->
  <div class="single-card">
    <h3>{#if $lang === "tr"} UARTEK Hava Savunma Sistemi {:else} UARTEK Air Defence System {/if}</h3>
    <p>
      {#if $lang === "tr"}
        2024-2025 yılları arasında Manisa Celal Bayar Üniversitesi Proje ve İnovasyon Kulübü bünyesinde faaliyet 
        gösteren UARTEK ekibinde görev aldım. Bu süreçte, galvonometre sistemine dayalı bir hava savunma sistemi 
        tasarlayarak Teknofest yarışmasına başvuruda bulunduk. Projede, sistemin hem otonom hem de manuel yönetimini 
        sağlayan kullanıcı arayüzünün geliştirilmesinden sorumlu oldum.
      {:else}
        Between 2024 and 2025, I took part in the UARTEK team operating under the Project and Innovation Club at 
        Manisa Celal Bayar University. During this period, we designed a galvanometer-based air defense system and 
        submitted it to the Teknofest competition. Within the project, I was responsible for developing the user 
        interface that enabled both autonomous and manual control of the system.
      {/if}
    </p>
  </div>
</div>

<style>
  :global(body) {
    overflow-y: auto;
  }

  .resume-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    color: var(--fg);
    min-height: 100vh;
    box-sizing: border-box;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 2rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .intro {
    max-width: 800px;
    margin: 0 auto 4rem;
    font-size: 1.2rem;
    line-height: 1.7;
    text-align: center;
    color: var(--fg-secondary);
  }

  .resume-link {
    background: var(--gradient-primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    margin: 0 0.25rem;
  }

  .resume-link:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
    margin: 4rem 0 3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .single-card {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto 2rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 2.5rem;
    text-align: left;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  .single-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-primary);
  }

  .single-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }

  .single-card h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--fg);
  }

  .single-card p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--fg-secondary);
  }


  .extra-content {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }

  .extra-content a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    margin-right: 1rem;
    padding: 0.5rem 1rem;
    background: var(--border-light);
    border-radius: 8px;
  }

  .extra-content a:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .resume-page {
      padding: 2rem 1rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    .intro {
      font-size: 1.1rem;
    }

    .single-card {
      padding: 2rem 1.5rem;
    }

    .single-card h3 {
      font-size: 1.5rem;
    }

    .single-card p {
      font-size: 1rem;
    }

  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 2rem;
    }

    .single-card {
      padding: 1.5rem 1rem;
    }

    .extra-content a {
      display: block;
      margin: 0.5rem 0;
      text-align: center;
    }
  }
</style>
