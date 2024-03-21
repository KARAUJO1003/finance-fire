import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { CardMovimentations } from './CardMovimentationsItems'
import { Activity, TrendingDown, TrendingUp, WalletCards } from 'lucide-react'
import prisma from '@/lib/prisma'

export const PainelCard = async () => {
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

  const totalIncomes = (): string => {
    let total = 0
    incomes.forEach((income) => {
      total += parseFloat(income.incomeAmount)
    })
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  const totalExpenses = (): string => {
    let total = 0
    expenses.forEach((expenses) => {
      total += parseFloat(expenses.expenseAmount)
    })
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  const totalGoals = (): string => {
    let total = 0
    goals.forEach((goal) => {
      total += parseFloat(goal.goalAmount)
    })
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const balance = (): string => {
    function Income() {
      let total = 0
      incomes.forEach((income) => {
        total += parseFloat(income.incomeAmount)
      })
      return total
    }
    function Expense() {
      let total = 0
      expenses.forEach((expense) => {
        total += parseFloat(expense.expenseAmount)
      })
      return total
    }
    const sum = Income() - Expense()

    return sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <div className="flex justify-between gap-5 col-span-full">
      <CardMovimentations
        cardtitle="Saldo do mês"
        carddescription="Detalhes"
        cardicon={
          <WalletCards
            size={20}
            color="gray"
            className="m-0 p-0 flex items-center justify-center"
          />
        }
        cardvalue={`${totalIncomes()} `}
        cardbutton="Ver mais"
        href="/pages/dashboard/ganhos"
      />

      <CardMovimentations
        cardtitle="Ganhos Recentes"
        carddescription="Detalhes"
        cardicon={
          <TrendingUp
            color="#01a176"
            size={20}
            className="m-0 p-0 flex items-center justify-center"
          />
        }
        cardvalue={`${totalExpenses()}`}
        cardbutton="Explorar"
        href="/pages/dashboard/ganhos"
      />
      <CardMovimentations
        cardtitle="Despesas do Mês"
        carddescription="Ver Mais"
        cardicon={
          <TrendingDown
            size={20}
            color={'#e11d48'}
            className="m-0 p-0 flex items-center justify-center "
          />
        }
        cardvalue={`${balance()}`}
        cardbutton="Analisar"
        href="/pages/dashboard/despesas"
      />
      <CardMovimentations
        cardtitle="Meta"
        carddescription="Performance"
        cardicon={
          <Activity
            size={20}
            color="gray"
            className="m-0 p-0 flex items-center justify-center"
          />
        }
        cardvalue={`${totalGoals()}`}
        cardbutton="Ver Detalhes"
        href="/pages/dashboard/metas"
      />
    </div>
  )
}
