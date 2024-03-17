'use client'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export default function Home() {
  const textTitle = useRef(null)
  gsap.fromTo(
    textTitle.current,
    { opacity: 0 },
    {
      // y: 0,
      opacity: 1,
      duration: 3,
      yoyo: true,
      repeat: 1,
      ease: 'back.in',
    },
  )
  return (
    <main className="h-screen w-full px-10 py-5 flex flex-col">
      <div className="w-full flex justify-end">
        <Button variant={'secondary'}>
          <Link href={'pages/dashboard'}>Dashboard</Link>
        </Button>
      </div>
      <div
        ref={textTitle}
        className="w-full flex flex-col items-center mt-20 justify-start h-screen"
      >
        <h1 className="text-4xl mb-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-blue-500">
          Bem-vindo à Página Inicial
        </h1>

        <Link
          href={'pages/dashboard'}
          className="flex gap-2 items-center text-muted-foreground"
        >
          <span>Clique aqui para continuar</span>Dashboard
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  )
}
