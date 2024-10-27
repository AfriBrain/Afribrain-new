import type { Metadata } from "next";
import { Inter, Caprasimo } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "AfriBrain Bespoke Software",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
