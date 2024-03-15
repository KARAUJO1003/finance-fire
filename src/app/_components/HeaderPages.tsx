'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export const HeaderPages = () => {
  const pathname = usePathname()
  return (
    <header className="p-5 w-full flex justify-between items-center px-10 backdrop-blur-sm ">
      <span className="capitalize">{pathname.split('/').pop()}</span>
      <div className="flex items-center space-x-5">
        <span>Perfil</span>
        <span>Sair</span>
      </div>
    </header>
  )
}
