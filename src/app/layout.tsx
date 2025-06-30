import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AUTOLIGAS - Concessionaria Auto Nuove e Usate",
  description: "La tua destinazione per auto nuove e usate di qualità",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
