// CORE
'use client';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './i18n'

// COMPONENTS
import { MainNavigation } from '@/components/layout/main-navigation/main-navigation'
import { AuthButtons } from '@/components/auth/auth-buttons/auth-buttons';

// ASSETS
import './globals.scss'

// CONTEXT
import { AuthContextProvider } from '@/context/auth-context';

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
        <AuthContextProvider>
        <div id="modal-root"></div>
          <div className='content-wrapper'>
            <AuthButtons />
            <MainNavigation />
            {children}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  )
}
