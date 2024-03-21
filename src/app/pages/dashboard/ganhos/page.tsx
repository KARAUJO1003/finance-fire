import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import { DataTableDemo } from '@/app/_components/DataTableDemo'
import { columns } from './_components/Columns'

export default async function Ganhos() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const data = await prisma.incomes.findMany({
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
      <main>
        <DataTableDemo data={data} columns={columns} />
      </main>
    </div>
  )
}
