'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Loader, LogIn, LogOut } from 'lucide-react'

export const ButtonLogin = () => {
  const handleSignIn = async () => {
    await signIn()
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const { status } = useSession()
  return (
    <div>
      {status === 'loading' && <Loader className="animate-spin" />}
      {status === 'unauthenticated' && (
        <Button
          onClick={handleSignIn}
          variant={'ghost'}
          className="max-sm:hidden gap-2"
        >
          Entrar
          <LogIn size={14} />
        </Button>
      )}
      {status === 'authenticated' && (
        <Button
          onClick={handleSignOut}
          variant={'ghost'}
          className="max-sm:hidden gap-2"
        >
          Sair
          <LogOut size={14} />
        </Button>
      )}
    </div>
  )
}
