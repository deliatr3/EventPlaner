<script>
  export let data;
  const { event } = data;
</script>

<h1>{event.title}</h1>

<ul class="list-unstyled mt-3">
  <li><strong>Datum:</strong> {event.date}</li>
  <li><strong>Uhrzeit:</strong> {event.time}</li>
  <li><strong>Ort:</strong> {event.venue}</li>
  <li><strong>Dauer:</strong> {event.duration} Stunden</li>
</ul>
