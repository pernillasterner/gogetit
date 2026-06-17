import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Go Get It",
  description: "Din följeslagare mot drömjobbet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" data-scroll-behavior="smooth" className={urbanist.variable}>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
