'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export const TitleHome = () => {
  const { data, status } = useSession()
  return (
    <>
      <h1 className="text-4xl mb-5 font-bold flex flex-col bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-500">
        <span>
          Olá, {status === 'authenticated' ? data?.user.name : 'Tudo bem?'}
        </span>
        <span>Bem-vindo à Página Inicial </span>
      </h1>
    </>
  )
}
