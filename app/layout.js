// app/layout.js or app/layout.tsx
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: "Pro-Active Hospital",
  description: "Pro-Active Hospital - Your Health, Our Priority",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pro-Active Hospital</title>
      </head>
      <body className={`${inter.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
