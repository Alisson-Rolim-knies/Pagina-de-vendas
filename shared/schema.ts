import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Add visitors table to track page visits
export const visitors = pgTable("visitors", {
  id: serial("id").primaryKey(),
  ip: text("ip").notNull(),
  userAgent: text("user_agent").notNull(),
  referrer: text("referrer"),
  visitedAt: timestamp("visited_at").defaultNow().notNull()
});

export const insertVisitorSchema = createInsertSchema(visitors);
export type InsertVisitor = z.infer<typeof insertVisitorSchema>;
export type Visitor = typeof visitors.$inferSelect;
