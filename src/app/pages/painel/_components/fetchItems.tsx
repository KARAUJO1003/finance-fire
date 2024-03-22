import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function fetchItems() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const incomes = await prisma.incomes.findMany({
    where: {
      userId: session?.user.id,
    },
  })

  const expenses = await prisma.expenses.findMany({
    where: {
      userId: session?.user.id,
    },
  })
  const goals = await prisma.goal.findMany({
    where: {
      userId: session?.user.id,
    },
  })

  return { incomes, expenses, goals }
}
