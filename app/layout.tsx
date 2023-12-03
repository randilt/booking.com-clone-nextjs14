import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Booking.com Clone",
  description: "Clone of booking.com with web scraping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />
        {children}
      </body>
    </html>
  );
}
