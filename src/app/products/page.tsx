import { Pill } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "판매제품 | 아주바이오",
  description: "아주바이오가 위탁판매 중인 전문의약품 목록입니다.",
};

const products = [
  {
    name: "제품 A",
    category: "순환기계",
    manufacturer: "OO제약",
    description: "고혈압 치료에 사용되는 전문의약품입니다.",
  },
  {
    name: "제품 B",
    category: "소화기계",
    manufacturer: "OO제약",
    description: "위장질환 치료를 위한 전문의약품입니다.",
  },
  {
    name: "제품 C",
    category: "호흡기계",
    manufacturer: "OO제약",
    description: "호흡기 질환 치료에 사용되는 전문의약품입니다.",
  },
  {
    name: "제품 D",
    category: "내분비계",
    manufacturer: "OO제약",
    description: "당뇨병 관리를 위한 전문의약품입니다.",
  },
  {
    name: "제품 E",
    category: "근골격계",
    manufacturer: "OO제약",
    description: "관절 및 근골격계 질환 치료를 위한 전문의약품입니다.",
  },
  {
    name: "제품 F",
    category: "신경계",
    manufacturer: "OO제약",
    description: "신경계 질환 치료에 사용되는 전문의약품입니다.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-dark">판매제품</h1>
          <p className="mt-2 text-gray-600 text-lg">위탁판매 중인 전문의약품 목록</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <Pill size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">{product.name}</h3>
                    <span className="text-xs text-primary font-medium">{product.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{product.description}</p>
                <p className="text-xs text-gray-400">제조사: {product.manufacturer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
            <p className="text-gray-600">
              위 제품 목록은 샘플 데이터입니다.<br />
              실제 취급 제품에 대한 자세한 내용은{" "}
              <a href="/contact" className="text-primary hover:text-primary-hover font-medium">
                문의하기
              </a>
              를 통해 확인해주세요.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
