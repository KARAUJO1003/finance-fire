import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { SideBarNav } from './_components/SideBarNav'
import { AuthProvider } from '@/providers/auth'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finance Fire',
  description: 'Gerencie suas finanças pessoais de forma simples e gratuita.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(['flex'], inter.className)}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <SideBarNav />
            {children}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
