'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
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
          <article className="flex gap-2 items-center max-w-lg">
            <h3>
              Com uma interface intuitiva e fácil de usar, o FinanceFire oferece
              recursos avançados com{' '}
              <strong>análise de desempenho financeiro</strong> e{' '}
              <strong>recomendações personalizadas</strong>. Além disso, o
              FinanceFire é seguro e confiável, e oferece suporte técnico 24
              horas por dia, 7 dias por semana. Com o FinanceFire, os usuários
              podem ter certeza de que seus finanças estão em boas hands.
            </h3>
          </article>
        </div>
      </Link>
    </div>
  )
}
