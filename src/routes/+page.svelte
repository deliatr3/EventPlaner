<script>
  export let data;
  const { events } = data;
</script>

<h1>Alle Veranstaltungen</h1>
<div class="row">
  {#each events as event}
    <div class="col-md-6 mb-4">
      <!-- benutze jetzt event._id als String -->
      <EventCard {event} />
    </div>
  {/each}
</div>
