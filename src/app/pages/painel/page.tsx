import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { CardAdminPainel } from './_components/CardAdminPainel'
import { processData } from './_components/ResultValues'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const { totalIncomes, totalExpenses, totalGoals, balance } =
    await processData()

  return (
    <main className="flex flex-col gap-5 w-full">
      <section className="flex gap-4 items-center justify-between">
        <CardAdminPainel title="Incomes" value={totalIncomes()} />
        <CardAdminPainel title="Expense" value={totalExpenses()} />
        <CardAdminPainel title="Expense" value={totalGoals()} />
        <CardAdminPainel title="Expense" value={balance()} />
      </section>
    </main>
  )
}
