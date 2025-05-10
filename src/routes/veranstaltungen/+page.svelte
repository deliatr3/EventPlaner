<script>
    export let data;
    const { events } = data;
  </script>
  
  <h1>Alle Veranstaltungen</h1>
  <ul>
    {#each events as event}
      <li>{event.title} am {event.startDate}</li>
    {/each}
  </ul>
  