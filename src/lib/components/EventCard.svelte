<script>
    export let event;
  </script>
  
  <div class="card h-100">
    <img src={event.imageUrl || '/placeholder.jpg'} class="card-img-top" alt={event.title} />
    <div class="card-body">
      <h5 class="card-title">{event.title}</h5>
      <p class="card-text">
        {event.startDate} {event.startTime}<br>
        {event.location}
      </p>
      <a href={`/veranstaltungen/${event._id}`} class="btn btn-outline-primary">
        Details anzeigen
      </a>
    </div>
  </div>
  