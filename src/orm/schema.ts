import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: varchar('id').primaryKey(),
  firstName: varchar('first_name', {length: 50}),
  lastName: varchar('last_name', {length: 50}),
  email: varchar('email', {length: 100}),
});

export const links = pgTable('links', {
  id: serial('id').primaryKey(),
  key: varchar('key', {length: 100}).unique(),
  hash: varchar('hash', {length: 500}).unique(),

  description: text('desc'),
  name: varchar('name', {length: 250}),
  link: text('link').notNull(),
});