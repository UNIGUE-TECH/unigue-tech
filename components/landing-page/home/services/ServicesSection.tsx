import ServicesGrid from './ServicesGrid'
import ServicesLogos from './ServicesLogos'

export default function ServicesHeader() {
  return (
     <section className="text-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
      <p className="text-sm sm:text-base md:text-lg text-green-600 mb-2 sm:mb-3">Client we have partnered with</p>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-2 sm:mt-3 px-2">
        We design and build world-class <br className="hidden sm:block" />
        software for corporations.
      </h2>
      <div className='my-8 sm:my-12 md:my-16 lg:my-20'>
        <ServicesLogos />
      </div>
      <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
        <p className="text-sm sm:text-base md:text-lg text-green-600 mb-2 sm:mb-3">The Services We Offer</p>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-2 sm:mt-3 px-2">
        We design and build world-class <br className="hidden sm:block" />
        software for corporations.
      </h2>
      </div>
      <div>
        <ServicesGrid />
      </div>
      <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
        <p className="text-sm sm:text-base md:text-lg text-green-600 mb-2 sm:mb-3">The Services We Offer</p>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-2 sm:mt-3 px-2">
        We design and build world-class <br className="hidden sm:block" />
        software for corporations.
      </h2>
      </div>
      <div>
        
      </div>
    </section>
  )
}
