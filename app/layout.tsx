import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap`}
        />
      </Head>
      <body className="font-mulish bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
