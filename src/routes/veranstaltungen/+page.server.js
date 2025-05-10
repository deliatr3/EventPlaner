import { getEvents } from '$lib/server/db.js';

export async function load() {
  console.log('🛠  /veranstaltungen load() called');
  const events = await getEvents();
  console.log('🛠  getEvents() liefert', events.length, 'Events:', events.map(e => e._id));
  return { events };
}
