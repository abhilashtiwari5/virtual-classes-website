import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { loadConfig } from "@/lib/loadConfig";
import type { SiteConfig } from "@/lib/types";

const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const site = loadConfig<SiteConfig>("site.json");

export const metadata: Metadata = {
  metadataBase: new URL("https://codewithabhilash.com"),
  title: {
    default: "CodeWithAbhilash",
    template: "%s | CodeWithAbhilash",
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-slate-900`}>
        <Navbar />
        {children}
        <Footer site={site} />
        <WhatsAppButton whatsapp={site.whatsapp} />

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4MeasurementId}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${site.ga4MeasurementId}');`}
        </Script>
      </body>
    </html>
  );
}
