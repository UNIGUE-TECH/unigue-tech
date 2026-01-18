import LandingPage from "../components/layouts/LandingPage";
import Hero from "../components/landing-page/home/Hero";
import About from "../components/landing-page/about/About";
import Services from "../components/landing-page/home/Services";
import Features from "../components/landing-page/features/Features";
import Contact from "../components/landing-page/contact-us/Contact";

export default function Home() {
  return (
    <LandingPage>
      <div className="flex flex-col gap-20 md:gap-10">
        <Hero />
        <About />
        <Services />
        <Features />
        <Contact />
      </div>
    </LandingPage>
  );
}
