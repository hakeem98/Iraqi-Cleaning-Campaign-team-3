import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Navbar/Nav";
import Footer from "@/components/Footer/Footer";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Clean Iraq",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={tajawal.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
