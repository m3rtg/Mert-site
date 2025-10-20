<script>
  import { Linkedin, Mail, Instagram, Github } from "lucide-svelte";
  import { lang } from "$lib/stores";

  function openEmailClient() {
    window.location.href = "mailto:mmertgorgulu@gmail.com";
  }
</script>

<div class="contact-container">
  <!-- Sosyal medya butonları -->
  <div class="social-buttons">
    <button class="icon-btn" on:click={openEmailClient}>
      <Mail size={20} />
    </button>

    <a 
      href="https://www.linkedin.com/in/muhammet-mert-g%C3%B6rg%C3%BCl%C3%BC-880051307/" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="icon-btn"
    >
      <Linkedin size={20} />
    </a>

    <a 
      href="https://github.com/m3rtg" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="icon-btn"
    >
      <Github size={20} />
    </a>

    <a 
      href="https://www.instagram.com/m3rtg_?igsh=MWdmNDRpdHBydndseA==" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="icon-btn"
    >
      <Instagram size={20} />
    </a>
  </div>
</div>

<style>
  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    color: var(--fg);
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }


  /* Sosyal medya butonları */
  .social-buttons {
    display: flex;
    gap: 0.75rem;
    margin-top: 0;
    justify-content: center;
  }

  .icon-btn {
    background: transparent;
    border: 1px solid var(--fg);
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    color: var(--fg);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    transition: all 0.3s ease;
  }

  .icon-btn:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  :root[data-theme="dark"] .icon-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }

</style>
