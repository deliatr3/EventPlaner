// test-connection.js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

async function main() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('✅ MongoDB-Verbindung erfolgreich!');
    // Optional: listet die DBs im Cluster
    const dbs = await client.db().admin().listDatabases();
    console.log('Datenbanken:', dbs.databases.map(d=>d.name).join(', '));
  } catch (err) {
    console.error('❌ Verbindungsfehler:', err);
  } finally {
    await client.close();
  }
}

main();
