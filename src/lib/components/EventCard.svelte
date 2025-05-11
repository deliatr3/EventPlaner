<script>
  export let event;

  // Datum im Format "DD/MM/YYYY" → Date-Objekt → deutsche Schreibweise
  function formatDate(d) {
    if (!d) return '–';
    const [day, month, year] = d.split('/').map(Number);
    const dt = new Date(year, month - 1, day);
    return dt.toLocaleDateString('de-CH', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  }

  // Uhrzeit im Format "HH:MM" → Date-Objekt → 24h-Format
  function formatTime(t) {
    if (!t) return '–';
    const [hours, minutes] = t.split(':').map(Number);
    const dt = new Date();
    dt.setHours(hours, minutes);
    return dt.toLocaleTimeString('de-CH', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<div class="card mb-4 shadow-sm">
  <div class="card-body">
    <h5 class="card-title">{event.title}</h5>
    <p class="card-text mb-1">
      <strong>Datum:</strong> {formatDate(event.date)}
    </p>
    <p class="card-text mb-1">
      <strong>Uhrzeit:</strong> {formatTime(event.time)}
    </p>
    <p class="card-text mb-1">
      <strong>Ort:</strong> {event.venue}
    </p>
    <p class="card-text mb-3">
      <strong>Dauer:</strong> {event.duration} Stunden
    </p>
    <a href={`/veranstaltungen/${event._id}`} class="btn btn-primary w-100">
      Details & Anmeldung
    </a>
  </div>
</div>
