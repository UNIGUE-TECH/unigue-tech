import LandingPage from "../components/layouts/LandingPage";
import Hero from "../components/landing-page/home/Hero";
import About from "../components/landing-page/about/About";
import Services from "../components/landing-page/home/services/Services";
import Features from "../components/landing-page/features/Features";
import Industries from "../components/landing-page/home/Industries";
import Faq from "../components/landing-page/faq/Faq"


export default function Home() {
  return (
    <LandingPage>
      <div className="flex flex-col">
        <Hero />
        <About />
        <Industries />
        <Services />
        <Features />
        <Faq />
      </div>
    </LandingPage>
  );
}
