import { drizzle } from 'drizzle-orm/singlestore';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL ortam değişkeni bulunamadı!');
}

const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
