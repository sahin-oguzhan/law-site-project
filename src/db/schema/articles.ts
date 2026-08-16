import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const articles = pgTable('articles', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt)').notNull(),
  content: text('content').notNull(),
  coverImage: text('cover_image'),
  isPublished: boolean('is_published').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Article = typeof articles.$inferSelect;
export type NewArticle = typeof articles.$inferInsert;
