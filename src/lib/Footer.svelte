<script lang="ts">
  import { lang } from '$lib/stores';
  import { Linkedin, Mail, Github, Instagram } from 'lucide-svelte';

  const year = new Date().getFullYear();

  function openEmail() {
    window.location.href = 'mailto:mmertgorgulu@gmail.com';
  }
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="footer-info">
      <span class="footer-name">Muhammet Mert Görgülü</span>
      <span class="footer-sep">·</span>
      <span class="footer-copy">&copy; 2025 - {year}</span>
    </div>

    <div class="footer-socials">
      <button class="f-btn" on:click={openEmail} title="Email" aria-label="Email">
        <Mail size={14} />
      </button>
      <a class="f-btn" href="https://www.linkedin.com/in/muhammet-mert-g%C3%B6rg%C3%BCl%C3%BC-880051307/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <Linkedin size={14} />
      </a>
      <a class="f-btn" href="https://github.com/m3rtg" target="_blank" rel="noopener noreferrer" title="GitHub">
        <Github size={14} />
      </a>
      <a class="f-btn" href="https://www.instagram.com/m3rtg_?igsh=MWdmNDRpdHBydndseA==" target="_blank" rel="noopener noreferrer" title="Instagram">
        <Instagram size={14} />
      </a>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--border);
    padding: 1.5rem 2rem;
    margin-top: 6rem;
  }
  .footer-inner {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .footer-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .footer-name {
    font-size: 0.825rem;
    font-weight: 600;
    color: var(--fg);
    white-space: nowrap;
  }
  .footer-sep {
    color: var(--fg-muted);
    font-size: 0.825rem;
  }
  .footer-copy {
    font-size: 0.8rem;
    color: var(--fg-muted);
    white-space: nowrap;
  }
  .footer-socials {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    flex-shrink: 0;
  }
  .f-btn {
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 7px;
    color: var(--fg-muted);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    text-decoration: none;
    transition: color 0.18s, border-color 0.18s, background 0.18s;
    flex-shrink: 0;
  }
  .f-btn:hover {
    color: var(--fg);
    border-color: var(--border-strong);
    background: var(--bg-secondary);
  }

  @media (max-width: 640px) {
    .footer-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.2rem;
    }
    .footer-sep {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .footer { padding: 1.25rem 1.25rem; margin-top: 4rem; }
  }
</style>
