import { Target, Eye, Heart, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개 | 아주바이오",
  description: "아주바이오의 비전, 미션, 연혁을 소개합니다.",
};

const history = [
  { year: "2024", event: "아주바이오 법인 설립" },
  { year: "2024", event: "전문의약품 판매대행 사업 개시" },
  { year: "2025", event: "주요 제약사 파트너십 체결" },
  { year: "2025", event: "영업 인력 확대 및 전국 네트워크 구축" },
];

const values = [
  {
    icon: Target,
    title: "전문성",
    description: "의약품 시장에 대한 깊은 이해와 전문 역량을 바탕으로 최적의 솔루션을 제공합니다.",
  },
  {
    icon: Eye,
    title: "투명성",
    description: "파트너사와의 투명한 소통과 정직한 경영을 통해 신뢰를 쌓아갑니다.",
  },
  {
    icon: Heart,
    title: "책임감",
    description: "환자의 건강과 제약산업의 발전에 기여하는 책임 있는 기업이 되겠습니다.",
  },
  {
    icon: Award,
    title: "성과",
    description: "데이터 기반의 영업 전략으로 파트너사의 목표 달성을 지원합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-dark">회사소개</h1>
          <p className="mt-2 text-gray-600 text-lg">아주바이오를 소개합니다</p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-8">CEO 인사말</h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                안녕하십니까, 아주바이오 대표이사입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                아주바이오는 전문의약품 판매대행 전문 법인CSO로서,
                제약회사와 의료 현장을 잇는 가교 역할을 수행하고 있습니다.
                풍부한 경험과 전문성을 갖춘 영업 인력을 바탕으로,
                파트너사의 제품이 환자에게 올바르게 전달될 수 있도록 최선을 다하고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                빠르게 변화하는 제약 환경 속에서 데이터 기반의 과학적 영업 활동과
                윤리적 경영을 실천하며, 지속 가능한 성장을 추구하겠습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                아주바이오와 함께 새로운 가치를 만들어 가시길 바랍니다.
              </p>
              <p className="mt-6 font-semibold text-dark">
                아주바이오 대표이사
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">비전 & 미션</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">VISION</h3>
              <p className="text-gray-700 leading-relaxed">
                대한민국 No.1 전문의약품 판매대행 기업으로서,
                제약산업의 혁신과 발전을 선도합니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">MISSION</h3>
              <p className="text-gray-700 leading-relaxed">
                전문성과 신뢰를 바탕으로 제약회사와 의료 현장을 연결하여,
                환자의 건강한 삶에 기여합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">핵심 가치</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">연혁</h2>
          <div className="max-w-2xl mx-auto">
            {history.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  {index < history.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-1" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-primary font-bold">{item.year}</span>
                  <p className="text-gray-700 mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
