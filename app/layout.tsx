import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Head from './Head'
import HeaderComponent from '../components/HeaderComponent'
import FooterComponent from '../components/FooterComponent'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className="dark:bg-slate-800">
      <div >
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  )
}
