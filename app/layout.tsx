import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jakob Ossmann",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className={`${inter.className} relative h-screen`}>
        {/* Background image */}
        <div className="absolute inset-0 z-[-1] h-full">
          <Image
            src="/ian-dooley-ZLBzMGle-nE-unsplash.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="Background Image"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-white opacity-50 z-[-1] h-full"></div>
        
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
