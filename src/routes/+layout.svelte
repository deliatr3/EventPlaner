<!-- src/routes/+layout.svelte -->
<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  onMount(async () => {
    // nur im Browser: Bootstrap-JS nachladen
    await import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });
</script>

<Navbar />

<main class="container mt-4">
  <slot />
</main>
