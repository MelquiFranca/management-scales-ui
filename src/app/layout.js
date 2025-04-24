'use client'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'styled-components'
import { COLORS } from '@/components/utils'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={{ ...COLORS }}>
      <html lang='pt-Br'>
        <body>
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
