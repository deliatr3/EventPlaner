import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('eventplanner');

export async function getEvents() {
  const events = await db.collection('events').find().toArray();
  return events.map(e => ({ ...e, _id: e._id.toString() }));
}

// Füge hier noch weitere Funktionen wie getEventById, createRegistration, etc. hinzu

export default { getEvents /*, weitere Export-Funktionen */ };
