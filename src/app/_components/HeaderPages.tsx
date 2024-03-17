'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FormCreate } from './Form-Create'

export const HeaderPages = () => {
  const pathname = usePathname()
  return (
    <header className="p-5 w-full flex justify-between items-center px-10 backdrop-blur-sm max-md:hidden">
      <span className="capitalize font-bold">{pathname.split('/').pop()}</span>
      <div className="flex items-center space-x-5">
        <FormCreate />
        <span>Sair</span>
      </div>
    </header>
  )
}
