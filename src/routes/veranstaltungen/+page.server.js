import { getEvents } from '$lib/server/db.js';

export async function load() {
  // hol alle Events aus der DB
  const events = await getEvents();
  return { events };
}
