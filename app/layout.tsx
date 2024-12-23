import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "One step Finance Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header />
          {/* header */}
          <main>  {children} </main>
          {/* footer */}
          <footer className="bg-blue-50 py-11">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p> Made with ❤️ </p>
            </div>
          </footer>
          {/* footer */}
        </body>
      </html>
    </ClerkProvider>
  );
}
