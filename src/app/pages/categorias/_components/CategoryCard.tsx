import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { Ban, Disc2 } from 'lucide-react'
import { getServerSession } from 'next-auth'
import React from 'react'
import { ButtonDelete } from './ButtonDelete'

export const CategoryCard = async () => {
  const session = await getServerSession(authOptions)

  const categories = await prisma.category.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      expenses: true,
      incomes: true,
      Goal: true,
    },
  })

  return (
    <main className=" grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
      {categories.length === 0 && (
        <Card className="flex justify-center items-center  min-h-32">
          <CardHeader className="flex  items-center justify-center p-0">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Ban color={'gray'} size={14} />
              <CardTitle>Nenhuma categoria cadastrada</CardTitle>
            </div>
          </CardHeader>
        </Card>
      )}
      {categories.map((item) => (
        <Card key={item.id} className="flex justify-between ">
          <div className="mb-3 flex items-center gap-4 p-4">
            <Disc2 color={`${item.color}`} size={14} />
            <CardHeader className="flex  items-start justify-start p-0">
              <div className="flex items-center justify-between gap-3">
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.incomes.length}</CardDescription>
              </div>
              <CardDescription className="flex flex-col justify-center items-center">
                <span>Criado em {item.created_at?.toLocaleDateString()}</span>
              </CardDescription>
              <CardDescription className="flex flex-col justify-center items-center">
                <span>Associado à {item.type?.toLowerCase()}</span>
              </CardDescription>
            </CardHeader>
          </div>
          <CardFooter>
            <ButtonDelete categoryID={item.id} />
          </CardFooter>
        </Card>
      ))}
    </main>
  )
}
