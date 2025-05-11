// src/lib/server/db.js
import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();

const db = client.db('EventPlaner'); // <— hier ggf. anpassen

/**
 * Liefert alle Events als Plain-Objects (inkl. _id als String)
 */
export async function getEvents() {
  const docs = await db.collection('events').find().toArray();

  return docs.map((doc) => {
    const event = {
      ...doc,
      _id: doc._id.toString()
    };

    if (doc.organizerId) {
      event.organizerId = doc.organizerId.toString();
    }

    return event;
  });
}

/**
 * Liefert ein einzelnes Event per ID (als String)
 * @param {string} id  ObjectId-String
 */
export async function getEventById(id) {
  if (!id) return null;

  if (!ObjectId.isValid(id)) {
    throw new Error(`Ungültige Event-ID: ${id}`);
  }

  const doc = await db
    .collection('events')
    .findOne({ _id: new ObjectId(id) });

  if (!doc) {
    return null;
  }

  const event = {
    ...doc,
    _id: doc._id.toString()
  };

  if (doc.organizerId) {
    event.organizerId = doc.organizerId.toString();
  }

  return event;
}
