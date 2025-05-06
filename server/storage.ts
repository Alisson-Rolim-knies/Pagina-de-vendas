import { db } from "@db";
import { visitors } from "@shared/schema";
import { eq } from "drizzle-orm";

export const storage = {
  recordVisit: async (ip: string, userAgent: string, referrer: string) => {
    try {
      const [visitor] = await db
        .insert(visitors)
        .values({
          ip,
          userAgent,
          referrer,
          visitedAt: new Date()
        })
        .returning();
      
      return visitor;
    } catch (error) {
      console.error("Error recording visit:", error);
      throw error;
    }
  },

  getVisitStats: async () => {
    try {
      const allVisits = await db.select().from(visitors);
      
      // Today's visits
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const todayVisits = allVisits.filter(visit => {
        const visitDate = new Date(visit.visitedAt);
        return visitDate >= today;
      });
      
      return {
        total: allVisits.length,
        today: todayVisits.length
      };
    } catch (error) {
      console.error("Error getting visit stats:", error);
      throw error;
    }
  }
};
