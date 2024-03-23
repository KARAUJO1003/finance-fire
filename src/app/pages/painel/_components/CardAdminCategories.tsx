import React from 'react'
import prisma from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export async function CardAdminCategories() {
  const exp = await prisma.expenses.findMany({ include: { category: true } })
  const inc = await prisma.incomes.findMany({ include: { category: true } })

  const data = [...exp, ...inc]
  console.log(data)

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card>
      <CardHeader className="bg-muted/20 py-3">
        <CardTitle>Ultimas movimentações</CardTitle>
      </CardHeader>
      <ul>
        {data.map((i) => (
          <li key={i.id} className="border-b  last:border-none">
            <CardContent className="py-2 flex justify-between items-end">
              <div className="flex flex-col ">
                <strong className="text-sm">{i.category?.name}</strong>
                <span className="text-xs">
                  {i.created_at?.toLocaleDateString()}
                </span>
              </div>
              <span className="text-sm">
                {formatter.format(Number(i.amount))}
              </span>
            </CardContent>
          </li>
        ))}
      </ul>
    </Card>
  )
}
