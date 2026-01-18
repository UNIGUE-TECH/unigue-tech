import ServicesGrid from './ServicesGrid'
import ServicesLogos from './ServicesLogos'

export default function ServicesHeader() {
  return (
     <section className="text-center">
      <p className="text-lg text-green-600">Client we have partnered with</p>
      <h2 className="text-3xl font-semibold mt-2">
        We design and build world-class <br />
        software for corporations.
      </h2>
      <div className='my-20'>
        <ServicesLogos />
      </div>
      <div className='mb-20'>
        <p className="text-lg text-green-600">The Services We Offer</p>
      <h2 className="text-3xl font-semibold mt-2">
        We design and build world-class <br />
        software for corporations.
      </h2>
      </div>
      <div>
        <ServicesGrid />
      </div>
      <div className='mt-20'>
        <p className="text-lg text-green-600">The Services We Offer</p>
      <h2 className="text-3xl font-semibold mt-2">
        We design and build world-class <br />
        software for corporations.
      </h2>
      </div>
      <div>
        
      </div>
    </section>
  )
}
