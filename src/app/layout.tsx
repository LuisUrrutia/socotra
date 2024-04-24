import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socotra Online Car Insurance | Fast & Reliable Coverage",
  description: "Get fast, reliable car insurance for single or multiple vehicles with Socotra. Offering comprehensive online coverage tailored to your needs. Protect your cars with ease and confidence today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('relative h-full font-sans antialiased', inter.className)}>
        <Header />
        <main className="flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
