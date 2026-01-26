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
    image: '/images/full-stack.jpg',
    imageAlt: 'Full stack development',
  },
  {
    title: 'Mobile App Development',
    description:
      'We create native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.',
    image: '/images/mobile.jpg',
    imageAlt: 'Mobile app development',
  },
  {
    title: 'UI/UX Design',
    description:
      'Our design team crafts beautiful, intuitive interfaces that prioritize user experience and align with your brand identity.',
    image: '/images/ui:ux.jpg',
    imageAlt: 'UI/UX design',
  },
  {
    title: 'Cloud Solutions',
    description:
      'We architect and implement scalable cloud infrastructure that grows with your business and ensures high availability.',
    image: '/images/cloud.jpg',
    imageAlt: 'Cloud solutions',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Build powerful online stores with secure payment processing, inventory management, and seamless checkout experiences.',
    image: '/images/e-commerce.jpg',
    imageAlt: 'E-commerce solutions',
  },
]

export default function FeaturesGrid() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        slidesOffsetAfter={0}
        slidesOffsetBefore={0}
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
          640: {
            spaceBetween: 24,
            slidesPerView: 1.5,
            slidesOffsetAfter: 24,
            slidesOffsetBefore: 24,
          },
          768: {
            spaceBetween: 32,
            slidesPerView: 2.2,
            slidesOffsetAfter: 32,
            slidesOffsetBefore: 32,
          },
          1024: {
            spaceBetween: 32,
            slidesPerView: 2.3,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 32,
          },
        }}
        className="pb-12 sm:pb-14 md:pb-16 pl-4 sm:pl-6 md:pl-8 lg:pl-16 xl:pl-32"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <FeatureCard
              title={feature.title}
              description={feature.description}
              imageSrc={feature.image}
              imageAlt={feature.imageAlt}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination-custom mt-4 sm:mt-6 md:mt-8 flex justify-center gap-2"></div>
    </div>
  )
}