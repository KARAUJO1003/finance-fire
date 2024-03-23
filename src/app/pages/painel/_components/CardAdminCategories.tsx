import React from 'react'
import prisma from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function CardAdminCategories() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return null
  }

  console.log(session.user.id)

  const exp = await prisma.expenses.findMany({
    where: { userId: session?.user.id },
    include: { category: true },
  })
  const inc = await prisma.incomes.findMany({
    where: { userId: session.user.id },
    include: { category: true },
  })
  const goal = await prisma.goal.findMany({
    where: { userId: session.user.id },
    include: { category: true },
  })

  console.log(inc, exp, goal)

  const data = [...exp, ...inc, ...goal]
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
      {data.length === 0 && (
        <div className="  p-4 flex items-center justify-center text-muted-foreground text-sm">
          <span>Você ainda não possui registros.</span>
        </div>
      )}
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
