'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import FeatureCard from './FeatureCard'

const features = [
  {
    title: 'Full stack Development',
    description:
      'Through refined UX design and reliable full-stack engineering, we deliver software that is elegant, intuitive, and built for long-term growth.',
  },
  {
    title: 'Mobile App Development',
    description:
      'We create native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Our design team crafts beautiful, intuitive interfaces that prioritize user experience and align with your brand identity.',
  },
  {
    title: 'Cloud Solutions',
    description:
      'We architect and implement scalable cloud infrastructure that grows with your business and ensures high availability.',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Build powerful online stores with secure payment processing, inventory management, and seamless checkout experiences.',
  },
]

export default function FeaturesGrid() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={32}
        slidesPerView={2.2}
        slidesOffsetAfter={52}
        slidesOffsetBefore={52}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: false,
          el: '.swiper-pagination-custom',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.3,
             slidesOffsetBefore: 32,  
             slidesOffsetAfter: 0,
          },
        }}
        className="pb-16 pl-4 md:pl-8 lg:pl-32"
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

      <div className="swiper-pagination-custom mt-8 flex justify-center gap-2"></div>
    </div>
  )
}