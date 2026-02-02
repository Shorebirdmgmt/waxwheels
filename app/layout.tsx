import React from "react"
import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Oswald, Special_Elite } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre"
});

const oswald = Oswald({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald"
});

const specialElite = Special_Elite({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-special"
});

export const metadata: Metadata = {
  title: 'Wax on Wheels | Auto Detailing & Car Audio | Ocean City, MD',
  description: 'From Sick to Slick. Professional auto detailing, ceramic coatings, paint correction, and car audio installation in Ocean City, Maryland. MECP Certified, GTECHNIQ Accredited. Call (410) 213-1154.',
  keywords: 'auto detailing, car detailing, ceramic coating, paint correction, car audio, Ocean City MD, GTECHNIQ, MECP certified',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d2a26',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${oswald.variable} ${specialElite.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
