import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function createExpense(formData: FormData) {
  'use server'

  const session = await getServerSession(authOptions)

  const amount = formData.get('amount') as string
  const date = formData.get('date') as string
  const status = formData.get('status') as string
  const categoryId = formData.get('categoryId') as string
  const description = formData.get('description') as string

  await prisma.expenses.create({
    data: {
      amount,
      date,
      status,
      categoryId,
      description,
      userId: session?.user.id,
    },
  })
  redirect('/pages/painel/despesas')
}

async function createIncome(formData: FormData) {
  'use server'

  const session = await getServerSession(authOptions)

  const amount = formData.get('amount') as string
  const date = formData.get('date') as string
  const status = formData.get('status') as string
  const categoryId = formData.get('categoryId') as string
  const description = formData.get('description') as string

  await prisma.incomes.create({
    data: {
      amount,
      date,
      status,
      categoryId,
      description,
      userId: session?.user.id,
    },
  })

  redirect('/pages/painel/ganhos')
}
async function createGoal(formData: FormData) {
  'use server'

  const session = await getServerSession(authOptions)

  const amount = formData.get('amount') as string
  const date = formData.get('date') as string
  const status = formData.get('status') as string
  const categoryId = formData.get('categoryId') as string
  const description = formData.get('description') as string

  await prisma.goal.create({
    data: {
      amount,
      date,
      status,
      categoryId,
      description,
      userId: session?.user.id,
    },
  })

  redirect('/pages/painel/metas')
}

const createItemAction = {
  createExpense,
  createIncome,
  createGoal,
}

export default createItemAction
