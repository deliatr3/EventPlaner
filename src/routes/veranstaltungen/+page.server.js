// listet alle Events
import { getEvents } from '$lib/server/db.js';

export async function load() {
  const events = await getEvents();
  return { events };
}
