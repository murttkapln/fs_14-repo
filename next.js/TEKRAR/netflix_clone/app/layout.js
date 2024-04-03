import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });


//! metadata objesi ve generateMetadata fonksiyonu sadece server Componentlerden export edilebilir.
export const metadata = {
  title: "Netflix",
  description: "A movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
