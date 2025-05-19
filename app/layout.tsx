import type React from "react"
import { Inter, Poppins } from "next/font/google"
import { Providers } from "./providers"
import "./globals.css"
import ErrorBoundary from "@/components/ErrorBoundary"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Shared Voices | Humanitarian Platform",
  description:
    "A platform to inform, inspire, and empower individuals and communities to take action towards a sustainable, innovative, and peaceful world.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <Providers>{children}</Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}
