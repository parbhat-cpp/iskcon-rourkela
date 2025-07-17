import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Homepage/Navbar";
import Footer from "@/components/Homepage/Footer";
import { KEYWORDS } from "./constants";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISKCON Rourkela",
  description: "Welcome to ISKCON Rourkela, a place where devotion is a way of life. Immerse yourself in a sacred space where chanting, wisdom, and community come together to nurture the soul.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: "https://www.iskconrourkela.com",
    title: "ISKCON Rourkela",
    description: "Welcome to ISKCON Rourkela, a place where devotion is a way of life. Immerse yourself in a sacred space where chanting, wisdom, and community come together to nurture the soul.",
    siteName: "ISKCON Rourkela",
    images: [],
  },
  keywords: KEYWORDS.join(', '),
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "www.iskconrourkela.com",
  logo: "./favicon.ico",
  name: "ISKCON Rourkela",
  legalName: "ISKCON Rourkela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <script
            key="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </head>
        <body
          className={`${poppins.variable} ${openSans.variable} antialiased`}
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </body>
      </html>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
