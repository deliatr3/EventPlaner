import { getEvents } from '$lib/server/db.js';

export async function load() {
  const events = await getEvents();
  console.log('ℹ️  getEvents() liefert', events.length, 'Events');
  return { events };
}
