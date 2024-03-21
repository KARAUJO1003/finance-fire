import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import prisma from '@/lib/prisma'

export default async function Ganhos() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const incomes = await prisma.incomes.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      user: true,
      category: true,
    },
  })
  return (
    <div className="flex  flex-col items-center justify-center gap-5">
      <Link href="/pages/dashboard/ganhos/new"> Criar novo </Link>
      <main>
        {incomes.map((item) => (
          <p
            key={item.id}
            className="flex flex-col gap-3 items-center justify-center"
          >
            <span>{item.incomeDate}</span>
            <span>{item.user?.name}</span>
            <span>{item.category?.name}</span>
          </p>
        ))}
      </main>
    </div>
  )
}
