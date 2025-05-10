<script>
    
    let events = [];
  
    // nur heute und nächste Tage laden
    onMount(async () => {
      events = await getEvents();
    });
  
    // Hilfsfunktion, um Tage mit Events hervorzuheben
    function hasEventOn(date) {
      return events.some(e => e.startDate === date.toISOString().slice(0,10));
    }
  
    const today = new Date();
    const days = Array.from({length: 30}, (_, i) => {
      const d = new Date(today);
      d.setDate(d.getDate() + i);
      return d;
    });
  </script>
  
  <h2>Terminkalender</h2>
  <div class="row">
    {#each days as day}
      <div class="col-1 text-center p-1">
        <div class:badge.bg-success={hasEventOn(day)} class="p-2">
          {day.getDate()}
        </div>
      </div>
    {/each}
  </div>
  