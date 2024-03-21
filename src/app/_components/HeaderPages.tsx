'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import financefire from '../../../public/financefire.png'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Loader, LogIn, LogOut } from 'lucide-react'

export const HeaderPages = () => {
  const pathname = usePathname()

  const handleSignIn = async () => {
    await signIn()
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const { status } = useSession()

  return (
    <header className="p-5 w-full flex justify-between items-center px-10 max-md:p-5 max-md:py-2 backdrop-blur-sm bg-opacity-30 ">
      <div className="flex items-center gap-2">
        <Image src={financefire} alt="Logo" width={40} height={40} />
        <span className="capitalize font-bold">
          {pathname.split('/').pop()}
        </span>
      </div>
      <div className="flex items-center space-x-5">
        {status === 'loading' && <Loader className="animate-spin" />}
        {status === 'unauthenticated' && (
          <Button
            onClick={handleSignIn}
            variant={'ghost'}
            className="max-sm:hidden"
          >
            Entrar
            <LogIn size={14} />
          </Button>
        )}
        {status === 'authenticated' && (
          <Button
            onClick={handleSignOut}
            variant={'outline'}
            className="max-sm:hidden gap-2"
          >
            Sair
            <LogOut size={14} />
          </Button>
        )}
      </div>
    </header>
  )
}
