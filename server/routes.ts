import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to record visits
  app.post('/api/record-visit', async (req: Request, res: Response) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || 'unknown';
      const userAgent = req.headers['user-agent'] || 'unknown';
      const referrer = req.headers.referer || req.body.referrer || 'direct';
      
      const visitor = await storage.recordVisit(ip, userAgent, referrer);
      
      res.status(200).json({ success: true, visitor });
    } catch (error) {
      console.error('Error recording visit:', error);
      res.status(500).json({ success: false, message: 'Failed to record visit' });
    }
  });

  // API route to get visitor stats
  app.get('/api/visitor-stats', async (req: Request, res: Response) => {
    try {
      const stats = await storage.getVisitStats();
      res.status(200).json(stats);
    } catch (error) {
      console.error('Error getting visitor stats:', error);
      res.status(500).json({ success: false, message: 'Failed to get visitor stats' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
