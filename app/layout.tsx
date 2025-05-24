import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-noto-sans',
});

export const metadata: Metadata = {
  title: 'Simple Presentation',
  description: '간단한 프레젠테이션 뷰어',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 브라우저 확장 프로그램 오류 방지
              if (typeof chrome !== 'undefined' && chrome.runtime) {
                chrome.runtime.onMessage = chrome.runtime.onMessage || function() {};
              }
              
              // 전역 에러 핸들러
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes('runtime.lastError')) {
                  e.preventDefault();
                  return false;
                }
              });
              
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && e.reason.message && e.reason.message.includes('runtime.lastError')) {
                  e.preventDefault();
                  return false;
                }
              });
            `,
          }}
        />
      </head>
      <body className={`${notoSansKr.variable} font-sans`}>{children}</body>
    </html>
  );
}
