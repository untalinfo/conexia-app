import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Conexia App",
  description: "Users, post, social and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 container py-6">{children}</main>
              <footer className="py-4 border-t">
                <div className="container text-center text-sm text-muted-foreground">
                  Technical Challenge - Next.js 14 Application
                </div>
              </footer>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
