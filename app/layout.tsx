import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MMA Guru PiggyBank",
  description: "Vote on fighters that got robbed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <body className={`${inter.className} relative h-screen`}>
        
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
