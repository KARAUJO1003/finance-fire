import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import { DataTableDemo } from '@/app/_components/DataTableDemo'
import { columns } from './_components/Columns'
import MobileList, { MobileItem } from '../_components/MobileListView'

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
    <div>
      <main>
        <DataTableDemo
          description="amount"
          data={data}
          columns={columns}
          urlpage="ganhos"
          className="max-md:hidden"
        />
        <MobileList.MobileListContainer urlNew="ganhos">
          {data.map((item) => {
            const amount = parseFloat(item.amount!)

            // Formatar o valor como um valor em reais
            const formatted = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(amount)

            return (
              <MobileItem
                title={item.description!}
                description={item.category?.name || ''}
                key={item.id}
                amount={formatted}
                date={item.date!}
                status={item.status!}
                user={item.user?.name || ''}
                id={item.id}
                routename="incomes"
              />
            )
          })}
        </MobileList.MobileListContainer>
      </main>
    </div>
  )
}
