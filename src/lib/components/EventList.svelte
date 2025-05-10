<script>
    import EventCard from './EventCard.svelte';
    export let events = [];
  </script>
  
  <div class="row">
    {#each events as event}
      <div class="col-md-6 mb-4">
        <EventCard {event} />
      </div>
    {/each}
  </div>
  