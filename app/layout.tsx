import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talha Jamil",
  description: "My personal portfolio built with dedication and passion.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 cursor-none`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
