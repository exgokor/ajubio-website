import { Lock, UserCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회원전용 | 아주바이오",
  description: "아주바이오 회원전용 페이지입니다.",
};

export default function MembersPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-dark">회원전용</h1>
          <p className="mt-2 text-gray-600 text-lg">임직원 전용 서비스</p>
        </div>
      </section>

      {/* Members Area */}
      <section className="py-20 bg-white">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={36} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-dark mb-3">로그인이 필요합니다</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              이 페이지는 아주바이오 임직원 전용 서비스입니다.<br />
              로그인 후 이용해 주세요.
            </p>

            {/* Login Form Placeholder */}
            <div className="space-y-4 max-w-sm mx-auto">
              <div>
                <input
                  type="text"
                  placeholder="아이디"
                  disabled
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-400 cursor-not-allowed"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  disabled
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-400 cursor-not-allowed"
                />
              </div>
              <button
                disabled
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-300 text-white font-semibold rounded-lg cursor-not-allowed"
              >
                <UserCircle size={18} />
                로그인 (준비 중)
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              로그인 기능은 추후 업데이트 예정입니다.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="text-primary hover:text-primary-hover font-medium text-sm"
            >
              계정 관련 문의는 여기를 클릭하세요
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
