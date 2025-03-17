import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen font-sans text-primary bg-[#f8fafc]">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <CallToAction />
        <CaseStudies />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
