import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./providers"
import { MainNav } from "@/components/main-nav"
import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen bg-background">
            <MainNav />
            {children}
            <footer className="border-t py-6">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  Built with Next.js and Tailwind CSS. Deployed on Vercel.
                </p>
              </div>
            </footer>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

