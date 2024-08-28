import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { khand } from "@/utils/font";

export const metadata: Metadata = {
  title: "SOO's DRUM VILLAGE",
  description: "SOO's DRUM VILLAGE",
  openGraph: {
    title: "SOO's DRUM VILLAGE",
    description: "SOO's DRUM VILLAGE",
    url: "http://artinfokorea.com",
    siteName: "ARTINFO",
    locale: "ko-KR",
    type: "website",
    images: [
      {
        url: "https://artinfo.s3.ap-northeast-2.amazonaws.com/prod/upload/1710/images/20240710/original/3jp88xoTO8r.1720575433094.png",
        width: 380,
        height: 380,
        alt: "아트인포-ARTINFO",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SOO's DRUM VILLAGE",
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
