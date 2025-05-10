<!-- src/routes/veranstaltungen/+page.svelte -->
<script>
  import EventCard from '$lib/components/EventCard.svelte';
  export let data;
  const { events } = data;
</script>

<h1>Alle Veranstaltungen</h1>

{#if events.length}
  <div class="row">
    {#each events as event}
      <div class="col-md-6 mb-4">
        <EventCard {event} />
      </div>
    {/each}
  </div>
{:else}
  <p>Keine Veranstaltungen gefunden.</p>
{/if}
