import Link from "next/link";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
            Welcome to Unigue Tech
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Transforming ideas into innovative digital solutions. We build
            cutting-edge technology that drives your business forward.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#contact"
              className="rounded-md bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm transition-colors hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              Get Started
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
