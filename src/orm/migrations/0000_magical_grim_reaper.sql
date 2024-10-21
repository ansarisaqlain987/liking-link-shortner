CREATE TABLE IF NOT EXISTS "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar(100),
	"hash" varchar(500),
	"desc" text,
	"name" varchar(250),
	"link" text NOT NULL,
	CONSTRAINT "links_key_unique" UNIQUE("key"),
	CONSTRAINT "links_hash_unique" UNIQUE("hash")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"email" varchar(100)
);
