import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { khand } from "@/utils/font";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "수 드럼전문학원",
  description:
    "재밌게 즐기고 신나게 두드릴 생각만 하고 오시면 됩니다. 걱정하시고 두려워하는 부분은 수 드럼학원에서 해결해 드리겠습니다. 재밌는 드럼라이프를 즐기세요",
  openGraph: {
    title: "수 드럼전문학원",
    description:
      "재밌게 즐기고 신나게 두드릴 생각만 하고 오시면 됩니다. 걱정하시고 두려워하는 부분은 수 드럼학원에서 해결해 드리겠습니다. 재밌는 드럼라이프를 즐기세요",
    url: "/img/lesson_college.png",
    siteName: "수 드럼전문학원",
    locale: "ko-KR",
    type: "website",
    images: [
      {
        url: "/img/lesson_college.png",
        width: 380,
        height: 380,
        alt: "수 드럼전문학원",
      },
    ],
  },

  verification: {
    other: {
      "naver-site-verification": ["53dc8c10f1615bc777e32b3db02d96e1cf88b1b2"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${khand.className} touch-manipulation  text-black  `}
        style={{ backgroundColor: "#ffffff" }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
