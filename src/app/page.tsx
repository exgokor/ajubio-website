import Hero from "@/components/Hero";
import { Building2, Users, TrendingUp, Handshake } from "lucide-react";
import Link from "next/link";

const businessAreas = [
  {
    icon: Building2,
    title: "전문의약품 판매대행",
    description: "제약회사의 전문의약품을 위탁받아 의료기관 및 약국에 효과적으로 판매합니다.",
  },
  {
    icon: Users,
    title: "전문 영업 인력",
    description: "풍부한 경험의 전문 MR(의약정보담당자)이 최적의 영업 활동을 수행합니다.",
  },
  {
    icon: TrendingUp,
    title: "시장 분석 & 전략",
    description: "데이터 기반의 시장 분석과 맞춤형 영업 전략을 제공합니다.",
  },
  {
    icon: Handshake,
    title: "파트너십",
    description: "제약회사와의 신뢰 기반 파트너십으로 지속 가능한 성장을 추구합니다.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Company Introduction Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            신뢰할 수 있는 파트너, 아주바이오
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            아주바이오는 전문의약품 판매대행 전문 법인CSO로서,
            제약산업의 효율적인 유통과 전문적인 영업 서비스를 제공합니다.
          </p>
        </div>
      </section>

      {/* Business Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">사업 영역</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <area.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            함께 성장할 파트너를 찾고 계신가요?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            아주바이오와 함께 전문의약품 시장에서 새로운 기회를 만들어보세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
