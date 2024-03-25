import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { DataTableDemo } from '@/app/_components/DataTableDemo'
import { columns } from './_components/Columns'
import prisma from '@/lib/prisma'

export default async function Reservas() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const data = await prisma.piggyBank.findMany({
    where: { userId: session.user.id },
    include: {
      user: true,
      goals: true,
    },
  })

  return (
    <div>
      <DataTableDemo
        data={data}
        description={'description'}
        columns={columns}
        urlpage="reservas"
      />
    </div>
  )
}
