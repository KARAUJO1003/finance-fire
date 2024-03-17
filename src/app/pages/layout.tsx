import { PropsWithChildren, ReactNode } from 'react'
import { HeaderPages } from '../_components/HeaderPages'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function Layout({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
  return (
    <div className="h-screen w-full flex flex-col ">
      <HeaderPages />
      <ScrollArea className="flex-1">
        <main className="w-full px-10 py-5 max-md:p-5 h-screen">
          {children}
        </main>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  )
}
