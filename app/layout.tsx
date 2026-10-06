import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MobileCta from "@/components/MobileCta/MobileCta";
import { site } from "@/content/site";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  robots: site.meta.noindex ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
