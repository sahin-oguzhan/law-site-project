import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const services = pgTable('services', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  shortDesc: text('short_desc').notNull(),
  desc: text('desc').notNull(),
  icon: text('icon'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Service = typeof services.$inferSelect;
export type NewService = typeof services.$inferInsert;
