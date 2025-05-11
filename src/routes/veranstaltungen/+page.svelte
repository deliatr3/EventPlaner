<script>
  export let data;
  const { events } = data;
  import EventCard from '$lib/components/EventCard.svelte';
</script>

<h1 class="mb-4">Alle Veranstaltungen</h1>

{#if events.length}
  <div class="row">
    {#each events as event}
      <div class="col-md-4 mb-4">
        <EventCard {event} />
      </div>
    {/each}
  </div>
{:else}
  <p>Keine Veranstaltungen gefunden.</p>
{/if}
