<script>
  export let data;
  const { events } = data;

  import IntroSection from '$lib/components/IntroSection.svelte';
  import Calendar from '$lib/components/Calendar.svelte';
</script>

<IntroSection>
  <div slot="text">
    <h1>Willkommen bei MyEventPlace!</h1>
    <p>Entdecke spannende Veranstaltungen in deiner Nähe und melde dich direkt über unsere Website an.</p>
    <a href="/veranstaltungen" class="btn btn-primary mt-3">
      Zu den Veranstaltungen
    </a>
  </div>
  <img slot="image" src="/images/hero-event.jpg" alt="Event-Szene" />
</IntroSection>

<section class="mt-5 container">
  <h2 class="mb-4">Terminkalender</h2>
  <Calendar {events} />
</section>
