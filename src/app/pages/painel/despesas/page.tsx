import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { DataTableDemo } from '@/app/_components/DataTableDemo'
import { columns } from './_components/Columns'
import prisma from '@/lib/prisma'

export default async function Despesas() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const data = await prisma.expenses.findMany({
    where: { id: session.user.id },
    include: {
      user: true,
      category: true,
    },
  })

  return (
    <div>
      <DataTableDemo
        data={data}
        amount={'amount'}
        columns={columns}
        urlpage="despesas"
      />
    </div>
  )
}
