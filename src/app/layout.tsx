import './styles/globalStyle.css'
import './styles/globalTheme.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './components/Header'
import styles from './components/ContainerApp.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <main className={`${styles.containerApp}`}>
            <Header/>
            {children}
          </main>
      </body>
    </html>
  )
}
