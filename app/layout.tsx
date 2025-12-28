import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Footer from "@/components/Footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.formyxa.com"),
  
  title: "ToolKit - Essential Text & JSON Utilities",
  description:
    "Professional text and JSON utilities. Convert text case, format JSON, clean text, take notes, and analyze text statistics.",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="border-b bg-card">
            <div className="max-w-[720px] mx-auto px-4 h-14 flex items-center justify-between">
              <a href="/" className="flex flex-col font-bold text-lg text-primary tracking-tight">
                <span>Formyxa</span>
                <span className="text-xs font-medium text-muted-foreground">
                  Text & JSON Utilities
                </span>
              </a>
              <nav className="flex gap-4 text-sm font-medium text-muted-foreground">
                <a href="/" className="hover:text-primary transition-colors">
                  Dashboard
                </a>
                <a href="/about" className="hover:text-primary transition-colors">
                  About
                </a>
              </nav>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1 max-w-[720px] mx-auto px-4 py-8 w-full">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>

        <Analytics />
      </body>
    </html>
  )
}
