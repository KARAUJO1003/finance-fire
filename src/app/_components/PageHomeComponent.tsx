'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TitleHome } from './TitleHome'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'

export const PageHomeComponent = () => {
  const textTitle = useRef(null)
  const textParag = useRef(null)
  const btn = useRef(null)
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      textTitle.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,

        ease: 'expo.inOut',
      },
    )
      .fromTo(
        textParag.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          ease: 'back.inOut',
        },
        '-=1.2',
      )
      .fromTo(
        btn.current,
        { y: 0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.25,
          ease: 'expo.inOut',
        },
        '-=1.2',
      )
  })

  const { status } = useSession()
  const handleSignIn = async () => {
    await signIn()
  }

  return (
    <div className="w-full flex flex-col items-center mt-20 justify-start h-screen">
      <div className="flex flex-col">
        <span ref={textTitle}>
          <TitleHome />
        </span>
        <article
          ref={textParag}
          className="flex gap-2 items-center max-w-lg mb-8 text-muted-foreground max-sm:text-sm"
        >
          <h3>
            Com uma interface intuitiva e fácil de usar, o FinanceFire oferece
            recursos avançados com{' '}
            <strong>análise de desempenho financeiro</strong> e{' '}
            <strong>recomendações personalizadas</strong>. Além disso, o
            FinanceFire é seguro e confiável Com o FinanceFire, os usuários
            podem ter certeza de que suas finanças estão em boas mãos.
          </h3>
        </article>
        {status === 'unauthenticated' ? (
          <Button
            ref={btn}
            size={'lg'}
            onClick={handleSignIn}
            className="bg-gradient-to-r  border font-bold w-max px-14 bg-clip-border from-violet-600  via-indigo-700  to-blue-700"
          >
            Fazer login
          </Button>
        ) : (
          <Button
            ref={btn}
            size={'lg'}
            className="bg-gradient-to-r  border font-bold w-max px-14 bg-clip-border from-violet-600  via-indigo-700  to-blue-700"
          >
            <Link
              href={'pages/painel'}
              className="flex  gap-2 items-center text-muted-foreground max-md:text-xs max-md:w-full"
            >
              Clique aqui para continuar <ArrowRight size={16} />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
