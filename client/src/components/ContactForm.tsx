import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

// Contact form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-primary mb-6">Get In Touch</h2>
            <p className="text-lg text-[#94a3b8] mb-10">Ready to elevate your digital strategy? Contact our team of experts today to discuss how we can help you achieve exceptional results.</p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-[#94a3b8]">+1 (323) 688-3445</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-[#94a3b8]">contact@twobirdspress.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Location</h3>
                  <p className="text-[#94a3b8]">95 S State St<br />Salt Lake City, Utah</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#f8fafc] p-8 rounded-lg shadow-sm">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-primary font-medium">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="px-4 py-3 border border-[#94a3b8] rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-primary font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="john@example.com" 
                          {...field} 
                          className="px-4 py-3 border border-[#94a3b8] rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-primary font-medium">Company</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Company" 
                          {...field} 
                          className="px-4 py-3 border border-[#94a3b8] rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-primary font-medium">Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 border border-[#94a3b8] rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="analytics">Google Analytics Management</SelectItem>
                          <SelectItem value="gtm">Google Tag Manager</SelectItem>
                          <SelectItem value="seo">SEO Services</SelectItem>
                          <SelectItem value="ppc">Paid Media & PPC</SelectItem>
                          <SelectItem value="social">Social Media Management</SelectItem>
                          <SelectItem value="web">Web Development & Design</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-8">
                      <FormLabel className="text-primary font-medium">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project and requirements..." 
                          rows={5} 
                          {...field} 
                          className="px-4 py-3 border border-[#94a3b8] rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-white rounded hover:bg-opacity-90 transition-all font-['Montserrat'] font-medium h-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
