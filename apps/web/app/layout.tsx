import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  // weight: ["400", "500", "600", "700"],
  // display: "swap",
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
    // Det alla sidor har gemensamt
    /** Next.js inte behöver återrendera header/footer när användaren klickar mellan /dashboard och /profile. */
    <html lang="sv" data-scroll-behavior="smooth" className={urbanist.variable}>
      <body className="flex flex-col min-h-screen">
        <header>HEADER</header>
        {children}
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
