import { PropsWithChildren } from 'react'
import { HeaderPages } from '../_components/HeaderPages'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen w-full">
      <HeaderPages />
      <main className="h-full w-full px-10 py-5">{children}</main>
    </div>
  )
}
