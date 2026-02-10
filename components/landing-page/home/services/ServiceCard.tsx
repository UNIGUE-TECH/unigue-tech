import ServiceDetailsCard from './ServiceDetailsCard'

type Props = {
  title: string
  description: string
  details: string[]
}

export default function ServiceCard({ title, description, details }: Props) {
  return (
    <div className="group relative bg-[#F4F1E6] rounded-xl p-4 sm:p-5 md:p-6 min-h-50 overflow-hidden">
      <h3 
        className="mb-2 sm:mb-3 text-xl sm:text-2xl md:text-3xl lg:text-[38px] text-start"
        style={{
          fontFamily: 'var(--font-darker-grotesque), "Darker Grotesque", sans-serif',
          fontWeight: 600,
          lineHeight: '100%',
          letterSpacing: 0,
        }}
      >
        {title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mt-16 sm:mt-20 md:mt-24">
        {description}
      </p>
      
      <ServiceDetailsCard items={details} />
    </div>
  )
}