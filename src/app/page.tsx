'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PageHomeComponent } from './_components/PageHomeComponent'
import { ButtonLogin } from './_components/ButtonLogin'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { status } = useSession()

  return (
    <main className="h-screen w-full px-10 py-5 flex flex-col">
      <div className="w-full flex justify-end gap-3 max-md:hidden">
        {status === 'authenticated' && (
          <Button variant={'secondary'}>
            <Link href={'pages/painel'}>Painel</Link>
          </Button>
        )}
        <ButtonLogin />
      </div>
      <PageHomeComponent />
    </main>
  )
}
