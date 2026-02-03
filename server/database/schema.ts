import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const souvenirs = sqliteTable('souvenirs', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    description: text('description'),
    typeMedia: text('type_media').notNull(), // 'audio', 'text', 'photo'
    urlMedia: text('url_media'),
    latitude: real('latitude').notNull(),
    longitude: real('longitude').notNull(),
    userId: integer('user_id').references(() => users.id),
    timestamp: integer('timestamp', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    username: text('username').notNull().unique(),
    password: text('password').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const sessions = sqliteTable('sessions', {
    id: text('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => users.id),
    expiresAt: integer('expires_at').notNull()
});
