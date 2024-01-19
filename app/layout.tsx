import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'attendance-web-app',
  description: 'Attendance Web App built with Next.js',
}

const montserrat = Montserrat({
  weight: ['400', '500', '600'],
  style: 'normal',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
