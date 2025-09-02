import type { Metadata } from "next";
import { Capriola } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const capriola = Capriola({
  variable: "--font-capriola",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CareNest",
  description: "A caregiver management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${capriola.variable} antialiased`}> */}
      <body className="font-capriola antialiased">
        <div className="from-primary to-secondary min-h-screen bg-gradient-to-b to-50%">
          {children}
        </div>
      </body>
    </html>
  );
}
