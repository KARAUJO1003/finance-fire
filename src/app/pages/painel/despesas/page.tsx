import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { DataTableDemo } from '@/app/_components/DataTableDemo'
import { columns } from './_components/Columns'
import prisma from '@/lib/prisma'
import MobileList, { MobileItem } from '../_components/MobileListView'

export default async function Despesas() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const data = await prisma.expenses.findMany({
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
        description={'description'}
        columns={columns}
        urlpage="despesas"
        className="max-md:hidden"
      />
      <MobileList.MobileListContainer urlNew="despesas">
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
              routename="expenses"
            />
          )
        })}
      </MobileList.MobileListContainer>
    </div>
  )
}
