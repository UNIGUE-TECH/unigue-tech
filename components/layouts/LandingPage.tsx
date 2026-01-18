import Footer from "./Footer";
import Navbar from "./Navbar";

interface LandingPageProps {
  children: React.ReactNode;
}

function LandingPage({ children }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-background overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default LandingPage;
