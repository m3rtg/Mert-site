<script>
  import { Linkedin, Mail, Instagram, Github } from "lucide-svelte";
  import { lang } from "$lib/stores";

  function openEmailClient() {
    window.location.href = "mailto:mmertgorgulu@gmail.com";
  }
</script>

<div class="contact-container">
  <div class="social-buttons">
    <button class="social-btn" on:click={openEmailClient} title="Email">
      <Mail size={18} />
    </button>

    <a
      href="https://www.linkedin.com/in/muhammet-mert-g%C3%B6rg%C3%BCl%C3%BC-880051307/"
      target="_blank"
      rel="noopener noreferrer"
      class="social-btn"
      title="LinkedIn"
    >
      <Linkedin size={18} />
    </a>

    <a
      href="https://github.com/m3rtg"
      target="_blank"
      rel="noopener noreferrer"
      class="social-btn"
      title="GitHub"
    >
      <Github size={18} />
    </a>

    <a
      href="https://www.instagram.com/m3rtg_?igsh=MWdmNDRpdHBydndseA=="
      target="_blank"
      rel="noopener noreferrer"
      class="social-btn"
      title="Instagram"
    >
      <Instagram size={18} />
    </a>
  </div>
</div>

<style>
  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: var(--fg);
  }

  .social-buttons {
    display: flex;
    gap: 0.625rem;
  }

  .social-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    color: var(--fg-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    text-decoration: none;
    transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
    flex-shrink: 0;
  }

  .social-btn:hover {
    color: var(--fg);
    border-color: var(--border-strong);
    background: var(--accent-subtle);
    transform: translateY(-2px);
  }
</style>

