import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
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
        <Services />
        <CallToAction />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
