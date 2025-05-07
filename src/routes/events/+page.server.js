import db from '$lib/server/db.js';

export async function load() {
  return { events: await db.getEvents() };
}
