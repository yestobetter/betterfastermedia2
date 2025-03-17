import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import StaticContactForm from "@/components/StaticContactForm";
import Footer from "@/components/Footer";

const StaticHome = () => {
  return (
    <div className="min-h-screen font-sans text-primary bg-[#f8fafc]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CallToAction />
        <About />
        <Testimonials />
        <StaticContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default StaticHome;