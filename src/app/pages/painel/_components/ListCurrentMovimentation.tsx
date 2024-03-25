import React from 'react'
import prisma from '@/lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'

type ListCurrentMovimentationProps = {
  classNames?: string
}

export async function ListCurrentMovimentation({
  classNames,
}: ListCurrentMovimentationProps) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return null
  }

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

  const data = [...exp, ...inc, ...goal]

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card className={cn([''], classNames)}>
      <CardHeader className="bg-muted/20 py-3">
        <CardTitle className="max-sm:text-sm">Ultimas movimentações</CardTitle>
      </CardHeader>
      {data.length === 0 && (
        <div className="  p-4 flex items-center justify-center text-muted-foreground text-sm">
          <span>Você ainda não possui registros.</span>
        </div>
      )}
      <ScrollArea>
        <ul className="max-h-64">
          {data.map((i) => (
            <li key={i.id} className="border-b  last:border-none">
              <CardContent className="py-2 flex justify-between items-center">
                <div className="flex flex-col ">
                  <strong className="text-sm max-sm:text-xs">
                    {i.description}
                  </strong>
                  <span className="text-xs w-fit flex gap-1 items-center pl-1 text-muted-foreground">
                    {i.category?.name}
                  </span>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-muted-foreground">
                    {i.created_at?.toLocaleDateString()}
                  </span>
                  <span className="text-sm max-sm:text-xs">
                    {formatter.format(Number(i.amount))}
                  </span>
                </div>
              </CardContent>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </Card>
  )
}
