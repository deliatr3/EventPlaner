<script>
  import { enhance } from '$app/forms';
  import RegistrationForm from '$lib/components/RegistrationForm.svelte';
  export let data;
  const { event, registrations } = data;
</script>

<h1>{event.title}</h1>
<p>
  {event.startDate} {event.startTime} — {event.location}
</p>
<p>{event.description}</p>
<img src={event.imageUrl} alt={event.title} class="img-fluid mb-3" />

<h2>Teilnehmer ({registrations.length})</h2>
<ul>
  {#each registrations as r}
    <li>
      {r.firstName} – {new Date(r.registeredAt).toLocaleString()}
    </li>
  {/each}
</ul>

<!-- Registrierungsformular mit enhance() -->
<RegistrationForm use:enhance />
