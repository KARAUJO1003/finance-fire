import React from 'react'
import { DataTableDemo } from '@/app/_components/DataTableDemo'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { columns } from './_components/Columns'
import prisma from '@/lib/prisma'

export default async function Details() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const data = await prisma.incomes.findMany()

  return (
    <div>
      <DataTableDemo
        amount="incomeAmount"
        urlpage="ganhos"
        columns={columns}
        data={data}
      />
    </div>
  )
}
