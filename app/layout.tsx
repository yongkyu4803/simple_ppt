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
      <body className={`${notoSansKr.variable} font-sans`}>{children}</body>
    </html>
  );
}
