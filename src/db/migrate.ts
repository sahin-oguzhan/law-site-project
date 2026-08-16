import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

dotenv.config({ path: '.env.local' });

const runMigration = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL ortam değişkeni bulunamadı!');
  }

  const sql = postgres(process.env.DATABASE_URL, {
    max: 1,
    ssl: 'require',
    prepare: false,
  });
  const db = drizzle(sql);

  console.log('Migration başlatılıyor');

  await migrate(db, { migrationsFolder: './src/db/migrations' });
  console.log('Tablolar Supabase veritabanına başarıyla uygulandı!');

  await sql.end();
  process.exit(0);
};

runMigration().catch((err) => {
  console.error('Migration hatası:', err);
  process.exit(1);
});
