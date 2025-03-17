import { users, type User, type InsertUser, type InsertContact, type ContactSubmission, contactSubmissions } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  userCurrentId: number;
  contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = this.contactCurrentId++;
    const contact: ContactSubmission = { ...insertContact, id };
    this.contactSubmissions.set(id, contact);
    
    // Log the contact submission to console with the target email
    console.log(`New contact submission received - will be sent to: nisjetl@gmail.com`);
    console.log(`From: ${contact.name} (${contact.email})`);
    console.log(`Company: ${contact.company}`);
    console.log(`Service: ${contact.service}`);
    console.log(`Message: ${contact.message}`);
    
    return contact;
  }
}

export const storage = new MemStorage();
