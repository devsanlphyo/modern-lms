// Layout Structure Guide (left -> right)
// 1. Sidebar on the left
// 2. Main content on the right

// Some requirements
// 1. Use Inter font
// 2. Update Meta

import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern LMS - Next-Gen Learning Platform",
  description: "A premium and beautiful learning management system platform built with Next.js, Tailwind CSS, and Clerk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${inter.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      >
        <body className="min-h-full flex bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
          {/* Left: Sidebar */}
          <Sidebar />

          {/* Right: Main Content Area */}
          <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
