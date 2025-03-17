import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Link } from "wouter";

const PrivacyPolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] font-semibold text-primary mb-8">Privacy Policy</h1>
          <p className="text-lg text-[#94a3b8] mb-6">Last Updated: March 17, 2025</p>
          
          <div className="prose max-w-none text-[#475569]">
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">1. Introduction</h2>
            <p>
              At TwoBirdsPress, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">2. Information We Collect</h2>
            <p>
              We may collect the following types of information:
            </p>
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Personal Information</h3>
            <ul className="list-disc ml-6 mb-6">
              <li>Name, email address, phone number, and company details when you contact us</li>
              <li>Billing and payment information when you purchase our services</li>
              <li>Information provided in communication with us</li>
              <li>Information submitted through our contact forms</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Usage and Technical Information</h3>
            <ul className="list-disc ml-6 mb-6">
              <li>IP address, browser type, and device information</li>
              <li>Pages you view, time spent on pages, and navigation paths</li>
              <li>Referring websites and search terms</li>
              <li>Operating system and other technology identifiers on devices you use</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">3. How We Collect Information</h2>
            <p>
              We collect information through:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Direct interactions when you provide information by filling in forms or corresponding with us</li>
              <li>Automated technologies such as cookies, server logs, and other tracking technologies</li>
              <li>Third parties such as business partners, service providers, and analytics providers</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">4. How We Use Your Information</h2>
            <p>
              We may use the information we collect for:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending you technical notices, updates, security alerts, and administrative messages</li>
              <li>Communicating with you about products, services, offers, promotions, and events</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              <li>Personalizing your experience on our website</li>
              <li>Carrying out our obligations and enforcing our rights</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">5. Disclosure of Your Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Service providers who perform services on our behalf</li>
              <li>Business partners with whom we jointly offer products or services</li>
              <li>Law enforcement or other governmental agencies as required by applicable law</li>
              <li>Other parties in connection with a corporate transaction, such as a merger or sale of assets</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and to hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">7. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure. While we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">8. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc ml-6 mb-6">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Objection to processing of your personal information</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">10. Changes to this Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-6">
              TwoBirdsPress<br />
              95 S State St<br />
              Salt Lake City, Utah<br />
              Phone: 323-688-3445<br />
              Email: privacy@twobirdspress.com
            </p>
            
            <div className="mt-10 mb-10">
              <Link href="/terms-of-service">
                <a className="text-primary hover:text-primary/80 underline">View our Terms of Service</a>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;