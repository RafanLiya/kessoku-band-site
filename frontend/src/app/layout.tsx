import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
