import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('eventplanner');

export async function getEvents() {
  return db.collection('events').find().toArray();
}
export async function getEventById(id) {
  return db.collection('events').findOne({ _id: new ObjectId(id) });
}
export async function getRegistrations(eventId) {
  return db
    .collection('registrations')
    .find({ event_id: new ObjectId(eventId) })
    .toArray();
}
export async function createRegistration({ eventId, firstName, email }) {
  return db.collection('registrations').insertOne({
    event_id:    new ObjectId(eventId),
    firstName,
    email,
    registeredAt: new Date()
  });
}
export async function getOrganizerById(id) {
  return db.collection('organizers').findOne({ _id: new ObjectId(id) });
}
