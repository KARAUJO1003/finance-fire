import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { Disc2 } from 'lucide-react'
import { getServerSession } from 'next-auth'
import React from 'react'
import { ButtonDelete } from './ButtonDelete'

export const CategoryCard = async () => {
  const session = await getServerSession(authOptions)

  const categories = await prisma.category.findMany({
    where: {
      userId: session?.user.id,
    },
  })

  return (
    <main className="space-y-3">
      {categories.map((item) => (
        <Card key={item.id} className="flex justify-between ">
          <div className="mb-3 flex items-center gap-4 p-4">
            <Disc2 color={`${item.color}`} size={14} />
            <CardHeader className="flex  items-start justify-start p-0">
              <div className="flex items-center gap-3">
                <CardTitle>{item.name}</CardTitle>
              </div>
              <CardDescription className="flex flex-col justify-center items-center">
                <span>Criando em {item.created_at?.toLocaleDateString()}</span>
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
