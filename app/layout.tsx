import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const font = Urbanist({weight:['200','400','500','600','700','800','900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "store",
  description: "Ecom store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
