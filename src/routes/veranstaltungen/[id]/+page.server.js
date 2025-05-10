import {
    getEventById,
    getRegistrations,
    createRegistration
  } from '$lib/server/db.js';
  import { fail, redirect } from '@sveltejs/kit';
  
  export async function load({ params }) {
    const event = await getEventById(params.id);
    const registrations = await getRegistrations(params.id);
    return { event, registrations };
  }
  
  export const actions = {
    register: async ({ request, params }) => {
      const form = await request.formData();
      const firstName = form.get('firstName');
      const email     = form.get('email');
      if (!firstName || !email) {
        return fail(400, { error: 'Name und E-Mail sind Pflicht.' });
      }
      await createRegistration({ eventId: params.id, firstName, email });
      throw redirect(303, `/veranstaltungen/${params.id}`);
    }
  };
  