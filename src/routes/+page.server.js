// src/routes/+page.server.js
import { getEvents } from '$lib/server/db.js';

export async function load() {
  // hole alle Events aus der DB
  const events = await getEvents();

  // gebe sie an die Page weiter
  return { events };
}
