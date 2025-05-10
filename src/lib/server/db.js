// src/lib/server/db.js
import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('EventPlaner');

export async function getEvents() {
  const docs = await db.collection('events').find().toArray();

  return docs.map((doc) => {
    // Baue erst ein Plain-Object ohne Methoden:
    const event = {
      ...doc,
      _id: doc._id.toString()        // ObjectId → String
    };

    // Wenn Du später organizerId nutzt, dann hier guarden:
    if (doc.organizerId) {
      event.organizerId = doc.organizerId.toString();
    }

    // Falls Du noch Datum-Objekte hast (z.B. registeredAt), 
    // wandel die ebenfalls per toISOString() um.

    return event;
  });
}
