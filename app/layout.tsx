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
  description: "수 드럼전문학원",
  openGraph: {
    title: "수 드럼전문학원",
    description: "수 드럼전문학원",
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "수 드럼전문학원",
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
