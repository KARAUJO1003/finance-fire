import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import prisma from '@/lib/prisma'

export async function fetchItems() {
  const session = await getServerSession(authOptions)

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
  const piggies = await prisma.piggyBank.findMany({
    where: {
      userId: session?.user.id,
      status: 'Depositado',
    },
  })

  return { incomes, expenses, goals, piggies }
}
