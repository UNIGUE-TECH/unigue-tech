type Props = {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="bg-white rounded-md shadow-lg overflow-hidden max-w-2xl">
      
      <div className="h-96 bg-gray-300 border-8 border-white" />

     
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
