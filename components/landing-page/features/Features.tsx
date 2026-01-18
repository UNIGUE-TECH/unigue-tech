function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We deliver exceptional value through innovation, expertise, and
            dedication.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                  <span className="text-background">✓</span>
                </div>
                Expert Team
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Our team consists of experienced professionals with expertise
                  across multiple technologies.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                  <span className="text-background">⚡</span>
                </div>
                Fast Delivery
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  We deliver projects on time without compromising on quality
                  or functionality.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-foreground">
                  <span className="text-background">💎</span>
                </div>
                Quality First
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  Every project is built with attention to detail and follows
                  industry best practices.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Features;
