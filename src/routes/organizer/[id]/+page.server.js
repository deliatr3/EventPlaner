import { getOrganizerById } from '$lib/server/db.js';

export async function load({ params }) {
  return { organizer: await getOrganizerById(params.id) };
}
