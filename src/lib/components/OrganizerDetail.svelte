<script>
    export let organizer;
  </script>
  <div class="card">
    <img src={organizer.imageUrl || '/placeholder-person.jpg'} class="card-img-top" alt={organizer.name} />
    <div class="card-body">
      <h3>{organizer.name}</h3>
      <p>{organizer.description}</p>
      <p>Kontakt: {organizer.email}, {organizer.phone}</p>
    </div>
  </div>
  