'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination,Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import FeatureCard from './FeatureCard'

const features = [
  {
    title: 'Full stack Development',
    description:
      'Through refined UX design and reliable full-stack engineering, we deliver software that is elegant, intuitive, and built for long-term growth.',
  },
  {
    title: 'Full stack Development',
    description:
      'Through refined UX design and reliable full-stack engineering, we deliver software that is elegant, intuitive, and built for long-term growth.',
  },
  {
    title: 'Full stack Development',
    description:
      'Through refined UX design and reliable full-stack engineering, we deliver software that is elegant, intuitive, and built for long-term growth.',
  },
]

export default function FeaturesGrid() {
  return (
    <Swiper
      modules={[Pagination,Autoplay]}
      spaceBetween={32}
      slidesPerView={1}
      autoplay={{
        delay:4000,
        disableOnInteraction:true,
      }}
     
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      
    >
      {features.map((feature, index) => (
        <SwiperSlide key={index}>
          <FeatureCard
            title={feature.title}
            description={feature.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
