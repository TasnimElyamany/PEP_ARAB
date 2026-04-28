import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PEP ARAB Control Systems | When Failure Is Not An Option",
  description:
    "PEP ARAB is Egypt's leading automation and control technology provider, delivering industrial PLC, SCADA, and marine control solutions across the Arab region since 2001.",
  keywords: [
    "PEP ARAB",
    "automation",
    "control systems",
    "PLC",
    "SCADA",
    "industrial automation",
    "Egypt",
    "Arab region",
  ],
  openGraph: {
    title: "PEP ARAB Control Systems",
    description: "When Failure Is Not An Option — Arab region's premier control systems provider.",
    type: "website",
    url: "https://peparab.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0a1628]">
        <Navbar />
        <RevealObserver />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
