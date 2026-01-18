function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              About Us
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We are a team of passionate developers and designers dedicated to
              creating exceptional digital experiences.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                To empower businesses with innovative technology solutions that
                drive growth and success in the digital age.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-900">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                To be the leading technology partner for businesses seeking
                transformative digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
