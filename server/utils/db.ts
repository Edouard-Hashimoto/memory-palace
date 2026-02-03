import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { drizzle as drizzleSqlite } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '../database/schema';

export let db: ReturnType<typeof drizzle> | ReturnType<typeof drizzleSqlite>;

if (process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN) {
  const client = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
  db = drizzle(client, { schema });
} else {
  const sqlite = new Database('sqlite.db');
  db = drizzleSqlite(sqlite, { schema });
}
