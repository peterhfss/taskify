import { pgEnum, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const roleEnum = pgEnum('role', ['admin', 'member'])

export const users = pgTable("users", {
    id: uuid("id")
        .primaryKey()
        .$defaultFn(() => uuidv7().toString()),
    name: varchar({ length: 100 }).notNull(),
    email: varchar({ length: 150 }).notNull().unique(),
    password: varchar({ length: 255 }).notNull(),
    role: roleEnum().notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})