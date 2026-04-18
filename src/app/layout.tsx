import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "مكتب المحامي محمد المسلم | التميّز القانوني في الرياض",
  description:
    "مكتب محاماة سعودي رائد متخصص في قانون الشركات والمنازعات التجارية والاستشارات المتوافقة مع الشريعة. أبراج اليمامة، الرياض.",
  keywords: [
    "محامي الرياض",
    "محامي سعودي",
    "مكتب محاماة",
    "قانون الشركات السعودية",
    "المنازعات التجارية",
    "الشريعة الإسلامية",
    "استشارات قانونية الرياض",
    "محمد المسلم",
    "أبراج اليمامة",
  ],
  openGraph: {
    title: "مكتب المحامي محمد المسلم | التميّز القانوني في الرياض",
    description:
      "مكتب محاماة سعودي رائد متخصص في قانون الشركات والمنازعات التجارية والاستشارات المتوافقة مع الشريعة.",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
