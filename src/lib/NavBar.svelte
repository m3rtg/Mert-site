<script lang="ts">
  import { theme, lang } from "./stores";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { goto } from "$app/navigation";

  const menuOpen = writable(false);
  const hidden = writable(false);
  let lastScrollY = 0;

  function toggleTheme() {
    theme.set($theme === "dark" ? "light" : "dark");
  }

  function handleResumeClick() {
    goto('/resume');
    window.scrollTo(0, 0);
  }

  onMount(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) menuOpen.set(false);
    };
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      hidden.set(window.scrollY > lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

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
  <!-- Sol taraf -->
  <div class="left">
    <a href="/" class="nav-linkbrand">Mert Görgülü</a>
    <a href="/#skills" class="nav-link">{#if $lang === "tr"} Beceriler {:else} Skills {/if}</a>
    <a href="/#projects" class="nav-link">{#if $lang === "tr"} Projeler {:else} Projects {/if}</a>
    <a href="/#achievements" class="nav-link">{#if $lang === "tr"} Sertifikalar {:else} Certifications {/if}</a>
    <a href="/resume" class="nav-link" on:click={handleResumeClick}>{#if $lang === "tr"} Özgeçmiş {:else} Resume {/if}</a>
    <a href="/#contact" class="nav-link">{#if $lang === "tr"} İletişim {:else} Contact {/if}</a>
  </div>

  <!-- Sağ taraf (masaüstü) -->
  <div class="right desktop-only">
    <button class="icon-btn" on:click={toggleTheme}>
      {#if $theme === "dark"} ☀️ {:else} 🌙 {/if}
    </button>

    <button class="icon-btn" on:click={() => lang.set("tr")}>TR</button>
    <button class="icon-btn" on:click={() => lang.set("en")}>EN</button>
  </div>

  <!-- Hamburger (mobil) -->
  <div class="mobile-only">
    <button class="icon-btn" on:click={() => menuOpen.update(v => !v)}>☰</button>
  </div>

  <!-- Açılır menü (mobil) -->
  <div class="mobile-menu" class:open={$menuOpen}>
    <a href="/#skills" class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"} Beceriler {:else} Skills {/if}</a>
    <a href="/#projects" class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"} Projeler {:else} Projects {/if}</a>
    <a href="/#achievements" class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"} Sertifikalar {:else} Certifications {/if}</a>
    <a href="/resume" class="mobile-nav-link" on:click={() => { menuOpen.set(false); handleResumeClick(); }}>{#if $lang === "tr"} Özgeçmiş {:else} Resume {/if}</a>
    <a href="/#contact" class="mobile-nav-link" on:click={() => menuOpen.set(false)}>{#if $lang === "tr"} İletişim {:else} Contact {/if}</a>
    <div class="mobile-menu-divider"></div>
    <button on:click={toggleTheme}>
      {#if $theme === "dark"} ☀️ Aydınlık Tema {:else} 🌙 Koyu Tema {/if}
    </button>
    <button on:click={() => lang.set("tr")}>🇹🇷 TR</button>
    <button on:click={() => lang.set("en")}>🇺🇸 EN</button>
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    backdrop-filter: blur(20px);
    z-index: 1000;
    transition: all 0.3s ease-in-out;
    min-height: 70px;
    box-sizing: border-box;
  }

  .navbar.hidden {
    transform: translateY(-100%);
  }

  .left {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex: 1;
    padding-left: 0.5rem;
  }

  .nav-linkbrand {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 800;
    color: inherit;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
  }

  .nav-linkbrand:hover {
    transform: scale(1.05);
  }

  .nav-link {
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 500;
    color: inherit;
    opacity: 0.8;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    position: relative;
  }

  .nav-link:hover {
    opacity: 1;
    background: var(--border-light);
    transform: translateY(-2px);
  }


  .right {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }

  .icon-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: inherit;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    min-height: 40px;
  }

  .icon-btn:hover {
    background: var(--border-light);
    transform: scale(1.05);
  }

  .mobile-only .icon-btn {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .mobile-only {
    display: none;
  }

  .mobile-menu {
    position: absolute;
    top: 100%;
    right: 1rem;
    left: 1rem;
    color: white;
    padding: 1rem;
    border-radius: 12px;
    transform-origin: top;
    background: rgba(0,0,0,0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);

    /* animasyon için */
    opacity: 0;
    transform: scaleY(0);
    pointer-events: none;
    transition: all 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 200px;
  }

  .mobile-menu.open {
    opacity: 1;
    transform: scaleY(1);
    pointer-events: auto;
  }

  .mobile-nav-link {
    display: block;
    text-decoration: none;
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .mobile-nav-link:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }

  .mobile-menu-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    margin: 0.5rem 0;
  }

  .mobile-menu button {
    text-align: center;
    padding: 0.6rem 0.8rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.85);
    color: white;
    border: none;
    width: 100%;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .mobile-menu button:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
  }

  /* Tablet ve küçük ekranlar için responsive ayarlar */
  @media (max-width: 1024px) {
    .left {
      gap: 1rem;
    }
    
    .nav-link {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
    
    .nav-linkbrand {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    .navbar {
      padding: 0.75rem 1.5rem;
    }
    
    .left {
      gap: 0.5rem;
      padding-left: 1rem;
    }
    
    .nav-linkbrand {
      font-size: 1.1rem;
    }
    
    .nav-link {
      display: none;
    }
    
    .desktop-only {
      display: none;
    }
    
    .mobile-only {
      display: block;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      padding: 0.5rem 1rem;
    }
    
    .left {
      padding-left: 1.5rem;
    }
    
    .nav-linkbrand {
      font-size: 1rem;
    }
    
    .mobile-menu {
      right: 1rem;
      left: 1rem;
      width: auto;
    }
  }
</style>
