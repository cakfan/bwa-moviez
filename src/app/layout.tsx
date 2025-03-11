import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: "./fonts/AvenirRegular.woff2",
  variable: "--font-avenir",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Moviez Streaming",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#DAE1E9]">
      <body
        className={`${avenir.variable} antialiased min-h-screen max-w-[640px] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
