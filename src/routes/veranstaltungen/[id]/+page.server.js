// lädt genau ein Event anhand der URL-ID
import { error } from '@sveltejs/kit';
import { getEventById } from '$lib/server/db.js';

export async function load({ params }) {
  const event = await getEventById(params.id);
  if (!event) throw error(404, 'Event nicht gefunden');
  return { event };
}
