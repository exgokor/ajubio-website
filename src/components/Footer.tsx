import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">아주바이오</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              전문의약품 판매대행 전문 법인CSO<br />
              신뢰와 전문성으로 제약산업의 가치를 높입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  판매제품
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  문의
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-primary transition-colors">
                  회원전용
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>02-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>info@ajubio.co.kr</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>서울특별시 OO구 OO로 OO, OO빌딩</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 아주바이오. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
