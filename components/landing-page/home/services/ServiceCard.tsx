import ServiceDetailsCard from './ServiceDetailsCard'

type Props = {
  title: string
  description: string
  details: string[]
}

export default function ServiceCard({ title, description, details }: Props) {
  return (
    <div className="group relative bg-[#F4F1E6] rounded-xl p-6 min-h-50 overflow-hidden">
      <h3 className="font-semibold mb-3 text-lg">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mt-24">
        {description}
      </p>
      
      <ServiceDetailsCard items={details} />
    </div>
  )
}