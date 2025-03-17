import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "wouter";

const TermsOfService = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-primary mb-8">Terms of Service</h1>
          <p className="text-lg text-[#94a3b8] mb-6">Last Updated: March 17, 2025</p>
          
          <div className="prose max-w-none text-[#475569]">
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">1. Introduction</h2>
            <p>
              Welcome to TwoBirdsPress. These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using TwoBirdsPress services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">2. Definition of Services</h2>
            <p>
              TwoBirdsPress provides digital marketing, analytics, and consulting services to businesses. Our services may include, but are not limited to, search engine optimization (SEO), paid media management, content creation, web analytics implementation, and performance marketing.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">3. Client Relationship</h2>
            <p>
              The relationship between TwoBirdsPress and our clients is governed by individual Service Agreements. These Terms complement any separate agreements we may have with you. In the event of any conflict between these Terms and a Service Agreement, the Service Agreement shall prevail with respect to the subject matter of that agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">4. Your Responsibilities</h2>
            <p>
              You agree to:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Provide accurate, complete, and up-to-date information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Communicate in a timely and professional manner</li>
              <li>Pay agreed fees according to the payment schedule</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">5. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>TwoBirdsPress retains ownership of all intellectual property created or developed by us</li>
              <li>You retain ownership of all intellectual property in materials you provide to us</li>
              <li>You grant us a license to use your materials for the purpose of providing our services</li>
              <li>We may use general marketing concepts, strategies, and techniques developed during our work with you for other clients</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">6. Confidentiality</h2>
            <p>
              We respect the confidentiality of your information. We will not disclose confidential information to any third party except as required to provide our services or as required by law. For more details, please see our Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, TwoBirdsPress shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">8. Termination</h2>
            <p>
              Either party may terminate the service relationship in accordance with the terms of the Service Agreement. Upon termination:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>All fees due will become immediately payable</li>
              <li>We will transfer relevant files and materials to you within 30 days</li>
              <li>We may retain archived copies of work performed</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be resolved exclusively in the state or federal courts located in Salt Lake City, Utah.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last Updated" date at the top of these Terms. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-6">
              TwoBirdsPress<br />
              95 S State St<br />
              Salt Lake City, Utah<br />
              Phone: 323-688-3445<br />
              Email: info@twobirdspress.com
            </p>
            
            <div className="mt-10 mb-10">
              <Link href="/privacy-policy">
                <a className="text-primary hover:text-primary/80 underline">View our Privacy Policy</a>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;