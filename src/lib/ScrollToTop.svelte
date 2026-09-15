<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowUp } from 'lucide-svelte';
  import { lang } from '$lib/stores';

  let visible = false;

  function handleScroll() {
    visible = window.scrollY > 300;
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onMount(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<button
  type="button"
  class="scroll-to-top"
  class:visible
  on:click={scrollToTop}
  aria-label={$lang === 'tr' ? 'Yukarı çık' : 'Scroll to top'}
  title={$lang === 'tr' ? 'Yukarı çık' : 'Scroll to top'}
>
  <ArrowUp size={20} strokeWidth={2.2} />
</button>

<style>
  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 48px;
    height: 48px;
    border-radius: 13px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    color: var(--fg-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 900;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    opacity: 0;
    visibility: hidden;
    transform: translateY(12px) scale(0.9);
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                visibility 0.25s,
                background 0.2s ease,
                border-color 0.2s ease,
                color 0.2s ease,
                box-shadow 0.2s ease;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  /* Arkasındaki kusursuz ortalanmış dairesel hale / çember */
  .scroll-to-top::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.12) 65%, transparent 100%);
    pointer-events: none;
    z-index: -1;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  :root[data-theme="light"] .scroll-to-top::before {
    background: radial-gradient(circle, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.02) 65%, transparent 100%);
  }

  .scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  .scroll-to-top:hover {
    color: var(--fg);
    border-color: var(--border-strong);
    background: var(--bg-tertiary);
    box-shadow: 0 0 26px rgba(0, 0, 0, 0.35);
    transform: scale(1.06);
  }

  .scroll-to-top:active {
    transform: scale(0.96);
  }

  @media (max-width: 768px) {
    .scroll-to-top {
      bottom: 1.75rem;
      right: 1.5rem;
      width: 46px;
      height: 46px;
      border-radius: 12px;
    }
  }

  @media (max-width: 480px) {
    .scroll-to-top {
      bottom: max(1.25rem, env(safe-area-inset-bottom, 1.25rem));
      right: max(1.25rem, env(safe-area-inset-right, 1.25rem));
      width: 44px;
      height: 44px;
      border-radius: 12px;
    }
  }
</style>
