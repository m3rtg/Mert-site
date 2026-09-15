<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/NavBar.svelte';
  import Footer from '$lib/Footer.svelte';
  import { theme, lang } from '$lib/stores';
  import { onMount } from 'svelte';
  import { onNavigate, beforeNavigate, afterNavigate } from '$app/navigation';

  onMount(() => {
    const unsub = theme.subscribe((t) => {
      document.documentElement.dataset.theme = t;
    });
    const unsub2 = lang.subscribe(() => {});
    return () => { unsub(); unsub2(); };
  });

  beforeNavigate((nav) => {
    if (nav.to?.route.id !== nav.from?.route.id) {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  });

  afterNavigate(() => {
    document.documentElement.style.scrollBehavior = '';
  });

  // View Transitions API — smooth fade between pages
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  $: title = $lang === 'tr'
    ? 'Mert Görgülü · Mekatronik Müh. & Yazılım Geliştirici'
    : 'Mert Görgülü · Mechatronics Eng. & Software Developer';

  $: description = $lang === 'tr'
    ? 'Manisa Celal Bayar Üniversitesi Mekatronik Mühendisliği öğrencisi. Back-end geliştirme, otomasyon sistemleri ve robotik üzerine çalışıyorum.'
    : 'Mechatronics Engineering student at Manisa Celal Bayar University. Working on back-end development, automation systems and robotics.';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Open Graph -->
  <meta property="og:type"        content="website" />
  <meta property="og:title"       content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:locale"      content={$lang === 'tr' ? 'tr_TR' : 'en_US'} />

  <!-- Twitter / X Card -->
  <meta name="twitter:card"        content="summary" />
  <meta name="twitter:title"       content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>

<NavBar />

<main class="page">
  <slot />
</main>

<Footer />

<style>
  .page {
    min-height: 100vh;
    background: var(--bg);
    color: var(--fg);
  }

  /* ── View Transitions ── */
  :global(::view-transition-old(root)) {
    animation: 180ms ease both vt-fade-out;
  }
  :global(::view-transition-new(root)) {
    animation: 260ms ease both vt-fade-in;
  }
  @keyframes vt-fade-out {
    to { opacity: 0; transform: translateY(-3px); }
  }
  @keyframes vt-fade-in {
    from { opacity: 0; transform: translateY(3px); }
  }
</style>
