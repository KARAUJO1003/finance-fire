'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FormCreate } from './Form-Create'
import financefire from '../../../public/financefire.png'
import Image from 'next/image'

export const HeaderPages = () => {
  const pathname = usePathname()
  return (
    <header className="p-5 w-full flex justify-between items-center px-10 max-md:p-5 max-md:py-2 backdrop-blur-sm bg-opacity-30 ">
      <div className="flex items-center gap-2">
        <Image src={financefire} alt="Logo" width={40} height={40} />
        <span className="capitalize font-bold">
          {pathname.split('/').pop()}
        </span>
      </div>
      <div className="flex items-center space-x-5">
        <FormCreate />
        <span className="max-sm:hidden">Sair</span>
      </div>
    </header>
  )
}
