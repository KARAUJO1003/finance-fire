import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { DataTableDemo } from '@/app/_components/DataTableDemo'
import { columns } from './_components/Columns'
import prisma from '@/lib/prisma'

export default async function Metas() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const data = await prisma.goal.findMany({
    where: { userId: session.user.id },
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
        urlpage="metas"
      />
    </div>
  )
}
