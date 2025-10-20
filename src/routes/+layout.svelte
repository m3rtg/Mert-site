<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/NavBar.svelte';
  import { theme, lang } from '$lib/stores';
  import { onMount } from 'svelte';

  onMount(() => {
    const unsub = theme.subscribe((t) => {
      document.documentElement.dataset.theme = t;
    });
    const unsub2 = lang.subscribe(() => {});
    return () => { unsub(); unsub2(); };
  });
</script>

<NavBar />

<main class="page">
  <slot />
</main>

<style>
  .page {
    min-height: 200vh;
    background: color-mix(in oklab, var(--bg) 94%, var(--fg) 6%);
    color: var(--fg);
    /* navbar ile aynı soldan boşluğu kullanalım */
    padding: 2rem 2rem; 
  }
</style>
