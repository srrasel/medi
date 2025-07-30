import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pro-Active Hospital",
  description: "Pro-Active Hospital - Your Health, Our Priority",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head> <link rel="icon" href="/favicon.ico" /></Head>
               
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
     
    
             <Header />
          {children}
          <Footer />
        

      </body>
    </html>
  );
}
