import { PropsWithChildren, ReactNode } from 'react'
import { HeaderPages } from '../_components/HeaderPages'
import { Toaster } from '@/components/ui/sonner'

export default function Layout({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
  return (
    <div className="h-screen w-full flex flex-col dark">
      <HeaderPages />

      <main className="w-full px-10 py-5 max-md:p-5 max-sm:px-3 dark h-screen overflow-y-scroll">
        {children}
      </main>
      <Toaster />
    </div>
  )
}
