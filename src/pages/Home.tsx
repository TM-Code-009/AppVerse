import Hero from "../components/hero/Hero";
import FeaturedApp from "../components/featured/FeaturedApp";
import AppGrid from "../components/apps/AppGrid";

import About from "../components/about/About";
import Services from "../components/services/Services";
import WhyChooseMe from "../components/whyChooseme/WhyChooseMe";

import SuggestionForm from "../components/suggestion/SuggestionForm";
import HireMe from "../components/hire/HireMe";
// import ContactForm from "../components/contact/ContactForm";

import Testimonials from "../components/testimonials/Testimonials";
import Newsletter from "../components/newsletter/NewsLetter";

import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedApp />

      <AppGrid />

      <About />

      <Services />

      <WhyChooseMe />

      <SuggestionForm />

      <HireMe />

      {/* <ContactForm /> */}

      <Testimonials />

      <Newsletter />

      <Footer />
    </>
  );
}