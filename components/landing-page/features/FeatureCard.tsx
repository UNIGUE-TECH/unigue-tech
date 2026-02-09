type Props = {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="bg-white rounded-md shadow-lg overflow-hidden max-w-2xl w-full">
      
      <div className="h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-300 border-4 sm:border-6 md:border-8 border-white" />

     
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
