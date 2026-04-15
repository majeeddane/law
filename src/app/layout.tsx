import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Al-Musallam Law Firm | Legal Excellence in Riyadh",
  description:
    "Premier Saudi law firm specializing in Corporate Law, Commercial Litigation, and Sharia-compliant legal consulting. Based in Olaya Towers, Riyadh.",
  keywords: [
    "Saudi law firm",
    "Riyadh lawyer",
    "corporate law Saudi Arabia",
    "commercial litigation",
    "Sharia law",
    "legal consulting Riyadh",
    "Mohammed Al-Musallam",
    "Olaya Towers",
    "real estate law Saudi",
    "dispute resolution",
  ],
  authors: [{ name: "Mohammed Al-Musallam Law Firm" }],
  openGraph: {
    title: "Mohammed Al-Musallam Law Firm | Legal Excellence in Riyadh",
    description:
      "Premier Saudi law firm specializing in Corporate Law, Commercial Litigation, and Sharia-compliant legal consulting.",
    type: "website",
    locale: "en_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
