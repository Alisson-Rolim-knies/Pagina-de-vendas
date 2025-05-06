import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    // Check if visitors table is already populated
    const existingVisitors = await db.select().from(schema.visitors);
    
    if (existingVisitors.length === 0) {
      // Seed some sample visitors
      const sampleVisitors = [
        {
          ip: "192.168.1.1",
          userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          referrer: "google.com",
          visitedAt: new Date(Date.now() - 24 * 60 * 60 * 1000) // Yesterday
        },
        {
          ip: "192.168.1.2",
          userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15",
          referrer: "facebook.com",
          visitedAt: new Date(Date.now() - 48 * 60 * 60 * 1000) // 2 days ago
        },
        {
          ip: "192.168.1.3",
          userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1",
          referrer: "instagram.com",
          visitedAt: new Date() // Today
        }
      ];
      
      for (const visitor of sampleVisitors) {
        await db.insert(schema.visitors).values(visitor);
      }
      
      console.log("Successfully seeded visitors table");
    } else {
      console.log("Visitors table already contains data, skipping seed");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
