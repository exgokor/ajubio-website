import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의 | 아주바이오",
  description: "아주바이오에 문의하세요.",
};

const contactInfo = [
  { icon: Phone, label: "전화", value: "02-XXX-XXXX" },
  { icon: Mail, label: "이메일", value: "info@ajubio.co.kr" },
  { icon: MapPin, label: "주소", value: "서울특별시 OO구 OO로 OO, OO빌딩" },
  { icon: Clock, label: "영업시간", value: "평일 09:00 - 18:00" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-dark">문의</h1>
          <p className="mt-2 text-gray-600 text-lg">궁금한 점이 있으시면 언제든 문의해주세요</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">문의하기</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">연락처 정보</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{item.label}</p>
                      <p className="text-dark font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p className="text-sm">지도 영역<br />(추후 카카오맵/구글맵 연동)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
