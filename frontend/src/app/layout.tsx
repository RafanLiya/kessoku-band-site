import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kessoku Band",
  description: "A Website To Promote the Kessoku Band of Bocchi The Rock!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
