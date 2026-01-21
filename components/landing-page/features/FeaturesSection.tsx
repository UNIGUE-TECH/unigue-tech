import FeaturesGrid from "./FeaturesGrid";
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section className="relative py-32 bg-features mb-10">
     
      <div className="absolute inset-0 bg-black/10" />

      <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>
      
      <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>

      <div className="relative max-w-7xl mx-auto px-6">
        <FeaturesGrid />
      </div>
    </section>
  )
}