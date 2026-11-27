import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ExecutiveCursor } from "@/components/ExecutiveCursor";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://erhatechnologies.com"
  ),
  title: "Faiz Jillani | CEO of ERHA Technologies",
  description:
    "Discover Faiz Jillani, CEO of ERHA Technologies, focused on AI automation, intelligent business solutions, technology innovation and digital transformation.",
  keywords: [
    "Faiz Jillani",
    "CEO of ERHA Technologies",
    "ERHA Technologies",
    "AI Automation",
    "Intelligent Business Solutions",
    "Custom Software Development",
    "Technology Leadership",
  ],
  authors: [{ name: "Faiz Jillani" }],
  openGraph: {
    title: "Faiz Jillani | CEO of ERHA Technologies",
    description:
      "Discover Faiz Jillani, CEO of ERHA Technologies, focused on AI automation, intelligent business solutions, technology innovation and digital transformation.",
    type: "website",
    locale: "en_US",
    siteName: "Faiz Jillani — Executive Portfolio",
    images: [
      {
        url: "/images/faiz-jillani-portrait.jpg",
        width: 1024,
        height: 1024,
        alt: "Faiz Jillani — CEO of ERHA Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz Jillani | CEO of ERHA Technologies",
    description:
      "Discover Faiz Jillani, CEO of ERHA Technologies, focused on AI automation, intelligent business solutions, technology innovation and digital transformation.",
    images: ["/images/faiz-jillani-portrait.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F5F8] text-[#101F49]">
        <ExecutiveCursor />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-[#101F49] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <Suspense
          fallback={
            <div className="h-18 w-full border-b border-[#BDBFCC]/30 bg-[#F4F5F8]" />
          }
        >
          <Navbar />
        </Suspense>

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
