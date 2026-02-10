"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const heroSlides = [
  {
    image: "/images/hero/hero-1.png",
    title: "전문의약품 판매의",
    highlight: "새로운 기준",
    description:
      "아주바이오는 제약회사의 전문의약품 판매를 위탁받아 대행하는 법인CSO로서, 신뢰와 전문성을 바탕으로 제약산업의 가치를 높입니다.",
  },
  {
    image: "/images/hero/hero-2.png",
    title: "전문 영업 인력과",
    highlight: "맞춤형 전략",
    description:
      "풍부한 경험의 전문 MR이 비뇨의학과 맞춤형 영업 전략으로 최적의 성과를 달성합니다.",
  },
  {
    image: "/images/hero/hero-3.png",
    title: "함께 성장하는",
    highlight: "신뢰의 파트너십",
    description:
      "안과에 특화된 법인CSO로, 신뢰 기반 파트너십으로 지속 가능한 성장을 추구하며, 제약산업의 미래를 함께 만들어갑니다.",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full h-full hero-swiper"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {slide.title}
                      <br />
                      <span className="text-primary">{slide.highlight}</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/about"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors"
                      >
                        회사소개
                        <ArrowRight size={18} />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-dark transition-colors"
                      >
                        문의하기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
