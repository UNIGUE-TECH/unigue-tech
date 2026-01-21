
import ServiceCard from './ServiceCard'

const services = Array(6).fill({
  title: 'Full stack Development',
  description:
    'Through refined UX design and reliable full-stack engineering, we deliver software that is elegant, intuitive, and built for long-term growth.',
})

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  )
}
