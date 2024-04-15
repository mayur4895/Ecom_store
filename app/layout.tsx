import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Modalprovider from "@/provider/modal-provider"; 
import ToastProvider from "@/provider/react-toast-provider";
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
        <Modalprovider/>
        <ToastProvider/>
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
