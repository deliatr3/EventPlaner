<script>
  export let data;
  const { events } = data;
  console.log('⚛️ client received events:', events);
</script>

<h1>Alle Veranstaltungen</h1>
<p>Anzahl Events: {events.length}</p>
<ul>
  {#each events as e}
    <li>{e.title} – {e.startDate}</li>
  {/each}
</ul>
