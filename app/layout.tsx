import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Head from "next/head";
import { Barlow_Condensed } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: '500',
});

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${barlowCondensed.className} relative h-screen`}>
        
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}
