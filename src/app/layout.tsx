import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud Hosting Project",
  icons: {
    icon: '/favicon.ico'
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={
          inter.className}
      >
        <Header />
        <ToastContainer theme="colored" position="top-center"/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
