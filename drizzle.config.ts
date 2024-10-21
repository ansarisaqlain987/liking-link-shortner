import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

config({path: './.env.local'});

export default defineConfig({
  schema: './src/orm/schema.ts',
  out: './src/orm/migrations',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.DB_HOST ?? '',
    user: process.env.DB_USER ?? '',
    password: process.env.DB_PASS ?? '',
    database: process.env.DB_NAME ?? '',
  },
});