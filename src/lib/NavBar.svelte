<script lang="ts">
  import { theme, lang } from "./stores";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const menuOpen = writable(false);
  const hidden = writable(false);
  let lastScrollY = 0;

  function toggleTheme() {
    theme.set($theme === "dark" ? "light" : "dark");
  }

  onMount(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) menuOpen.set(false);
    };
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      hidden.set(window.scrollY > lastScrollY && window.scrollY > 80);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.querySelector(".mobile-menu");
      const btn = document.querySelector(".mobile-only button");
      if (menu && !$menuOpen) return;
      if (menu && !menu.contains(e.target as Node) && btn && !btn.contains(e.target as Node)) {
        menuOpen.set(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<nav class="navbar" class:hidden={$hidden}>
  <!-- Brand -->
  <div class="left">
    <a href="/" class="brand">
      <span class="brand-first">Mert</span><span class="brand-last">Görgülü</span>
    </a>
    <div class="nav-links desktop-only">
      <a href="/#skills"       class="nav-link">{#if $lang === "tr"}Beceriler{:else}Skills{/if}</a>
      <a href="/#projects"     class="nav-link">{#if $lang === "tr"}Projeler{:else}Projects{/if}</a>
      <a href="/#achievements" class="nav-link">{#if $lang === "tr"}Sertifikalar{:else}Certifications{/if}</a>
      <a href="/resume"        class="nav-link">{#if $lang === "tr"}Özgeçmiş{:else}Resume{/if}</a>
      <a href="/#contact"      class="nav-link">{#if $lang === "tr"}İletişim{:else}Contact{/if}</a>
    </div>
  </div>

  <!-- Controls (desktop) -->
  <div class="right desktop-only">
    <div class="lang-switcher">
      <button class="lang-btn" class:active={$lang === 'tr'} on:click={() => lang.set("tr")}>TR</button>
      <span class="lang-divider">|</span>
      <button class="lang-btn" class:active={$lang === 'en'} on:click={() => lang.set("en")}>EN</button>
    </div>
    <button class="theme-btn" on:click={toggleTheme} aria-label="Toggle theme">
      {#if $theme === "dark"}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      {/if}
    </button>
  </div>

  <!-- Hamburger (mobile) -->
  <div class="mobile-only">
    <button class="hamburger" on:click={() => menuOpen.update(v => !v)} aria-label="Menu">
      <span class="ham-line" class:open={$menuOpen}></span>
      <span class="ham-line" class:open={$menuOpen}></span>
      <span class="ham-line" class:open={$menuOpen}></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" class:open={$menuOpen}>
    <a href="/#skills"       class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"}Beceriler{:else}Skills{/if}</a>
    <a href="/#projects"     class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"}Projeler{:else}Projects{/if}</a>
    <a href="/#achievements" class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"}Sertifikalar{:else}Certifications{/if}</a>
    <a href="/resume"        class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"}Özgeçmiş{:else}Resume{/if}</a>
    <a href="/#contact"      class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"}İletişim{:else}Contact{/if}</a>
    <div class="mobile-divider"></div>
    <div class="mobile-controls">
      <div class="lang-switcher mobile">
        <button class="lang-btn" class:active={$lang === 'tr'} on:click={() => lang.set("tr")}>TR</button>
        <span class="lang-divider">|</span>
        <button class="lang-btn" class:active={$lang === 'en'} on:click={() => lang.set("en")}>EN</button>
      </div>
      <button class="theme-btn" on:click={toggleTheme} aria-label="Toggle theme">
        {#if $theme === "dark"}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        {/if}
      </button>
    </div>
  </div>
</nav>

<style>
  /* ── Navbar shell (layout from app.css global .navbar) ── */
  .navbar {
    justify-content: space-between;
    align-items: center;
  }

  .navbar.hidden {
    transform: translateY(-100%);
  }

  /* ── Brand ── */
  .brand {
    text-decoration: none;
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    transition: opacity 0.2s;
  }
  .brand:hover { opacity: 0.7; }
  .brand-first { color: var(--fg); }
  .brand-last {
    color: var(--fg-muted);
    font-weight: 400;
    margin-left: 0.3em;
  }

  /* ── Layout ── */
  .left {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
  }
  .right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 0;
  }

  /* ── Nav Links ── */
  .nav-link {
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--fg-secondary);
    padding: 0.375rem 0.7rem;
    border-radius: 6px;
    transition: color 0.18s, background 0.18s;
    white-space: nowrap;
  }
  .nav-link:hover {
    color: var(--fg);
    background: var(--border-light);
  }

  /* ── Lang Switcher ── */
  .lang-switcher {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.25rem 0.45rem;
  }
  .lang-divider {
    color: var(--border-strong);
    font-size: 0.7rem;
    user-select: none;
    padding: 0 0.1rem;
  }
  .lang-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--fg-muted);
    padding: 0.2rem 0.4rem;
    border-radius: 5px;
    letter-spacing: 0.04em;
    transition: color 0.18s, background 0.18s;
    line-height: 1;
    font-family: inherit;
  }
  .lang-btn.active {
    color: var(--fg);
    background: var(--bg-secondary);
    box-shadow: 0 1px 2px rgba(0,0,0,0.08);
  }
  .lang-btn:hover:not(.active) { color: var(--fg); }

  /* ── Theme Button ── */
  .theme-btn {
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    color: var(--fg-secondary);
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.18s, background 0.18s, border-color 0.18s;
    flex-shrink: 0;
    padding: 0;
  }
  .theme-btn:hover {
    color: var(--fg);
    background: var(--border-light);
    border-color: var(--border-strong);
  }

  /* ── Hamburger ── */
  .hamburger {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-radius: 6px;
  }
  .ham-line {
    width: 20px;
    height: 2px;
    background: var(--fg);
    border-radius: 2px;
    display: block;
    transition: transform 0.28s ease, opacity 0.28s ease;
  }
  .ham-line:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
  .ham-line:nth-child(2).open { opacity: 0; transform: scaleX(0); }
  .ham-line:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

  /* ── Visibility ── */
  .desktop-only { display: flex !important; }
  .mobile-only  { display: none !important; }

  /* ── Mobile Menu ── */
  .mobile-menu {
    position: absolute;
    top: calc(100% + 6px);
    left: 1rem;
    right: 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 12px;
    box-shadow: var(--shadow-xl);
    padding: 0.5rem;
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
    pointer-events: none;
    transition: opacity 0.22s ease, transform 0.22s ease;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
  .mobile-menu.open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  .mobile-nav-link {
    display: block;
    text-decoration: none;
    color: var(--fg-secondary);
    padding: 0.7rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.18s, background 0.18s;
  }
  .mobile-nav-link:hover {
    color: var(--fg);
    background: var(--border-light);
  }

  .mobile-divider {
    height: 1px;
    background: var(--border);
    margin: 0.25rem 0.5rem;
  }

  .mobile-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    gap: 0.75rem;
  }
  .lang-switcher.mobile { flex: 1; }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .nav-link { font-size: 0.825rem; padding: 0.35rem 0.55rem; }
    .left { gap: 1.25rem; }
  }

  @media (max-width: 768px) {
    .desktop-only { display: none !important; }
    .mobile-only  { display: block !important; }
  }

  @media (max-width: 480px) {
    .mobile-menu { left: 0.5rem; right: 0.5rem; }
  }
</style>