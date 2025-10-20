import type React from "react"
import type { Metadata } from "next"
import { Quicksand, Nunito_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Pawsly.io - Track Your Pup's Daily Joy",
  description:
    "Track your pup's walks, meals, and joy — all in one place. Because every walk, every meal, and every wag matters. 🐾",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
