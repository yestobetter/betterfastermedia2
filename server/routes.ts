import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body using zod schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact submission (using in-memory storage for now)
      const contactSubmission = await storage.createContactSubmission(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact submission received successfully",
        data: contactSubmission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      }
      
      console.error("Error handling contact submission:", error);
      res.status(500).json({
        success: false,
        message: "Failed to process your request. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
