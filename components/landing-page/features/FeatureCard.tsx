import Image from 'next/image'

type Props = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export default function FeatureCard({ title, description, imageSrc, imageAlt }: Props) {
  return (
    <div className="bg-white rounded-md shadow-lg overflow-hidden max-w-2xl w-full">
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 border-4 sm:border-[6px] md:border-8 border-white overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

     
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
