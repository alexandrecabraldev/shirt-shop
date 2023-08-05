import './styles/globalStyle.css'
import './styles/globalTheme.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './components/Header'
import styles from './components/ContainerApp.module.css'
import { Suspense } from 'react'
import Loading from './[id]/loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Created by Alexandre Cabral for study',
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
            <Suspense fallback={<Loading/>}>
              <Header/>
              {children}
            </Suspense>
          </main>
      </body>
    </html>
  )
}
