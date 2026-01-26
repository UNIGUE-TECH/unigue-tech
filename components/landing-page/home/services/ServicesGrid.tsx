
import ServiceCard from './ServiceCard'
import { services } from '@/components/data/services'

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto px-4 sm:px-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          details={service.details}
        />
      ))}
    </div>
  )
}
