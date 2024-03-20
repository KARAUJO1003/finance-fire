'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'

import { useGSAP } from '@gsap/react'
import { TitleHome } from './movimentations/TitleHome'

export const PageHomeComponent = () => {
  const textTitle = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      textTitle.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'back.out',
      },
    )
  })

  return (
    <div
      ref={textTitle}
      className="w-full flex flex-col items-center mt-20 justify-start h-screen"
    >
      <Link
        href={'pages/dashboard'}
        className="flex gap-2 items-center text-muted-foreground max-md:text-xs max-md:w-full"
      >
        <div className="flex flex-col">
          <TitleHome />
          <span className="flex gap-2 items-center">
            Clique aqui para continuar <ArrowRight size={18} />
          </span>
        </div>
      </Link>
    </div>
  )
}
