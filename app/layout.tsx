import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dev Fuletra',
  description: 'Portfolio of Dev Fuletra',
  generator: 'Dev Fuletra',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon%20(1).ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
