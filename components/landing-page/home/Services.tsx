function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-4 text-3xl">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Web Development
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Custom web applications built with modern technologies and best
              practices.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-4 text-3xl">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Mobile Apps
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Native and cross-platform mobile applications for iOS and Android.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="mb-4 text-3xl">☁️</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Cloud Solutions
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Scalable cloud infrastructure and deployment solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
