import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const contact = pgTable('contact', {
  id: uuid('id').defaultRandom().primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  message: text('message').notNull(),
  isRead: boolean('is_read').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Contact = typeof contact.$inferSelect;
export type NewContact = typeof contact.$inferInsert;
