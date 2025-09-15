import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      <body className={`${montserrat.className} antialiased`}>
        <div className="from-primary to-secondary min-h-screen bg-gradient-to-b to-50%">
          {children}
        </div>
      </body>
    </html>
  );
}
