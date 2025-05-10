<script>
    export let data;
    const { organizer } = data;
    import OrganizerDetail from '$lib/components/OrganizerDetail.svelte';
  </script>
  
  <OrganizerDetail {organizer} />
  