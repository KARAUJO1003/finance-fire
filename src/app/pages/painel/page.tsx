import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import {
  AdminCard,
  AdminCardActions,
  AdminCardHeader,
  AdminCardHeaderTitle,
  CardAdmin,
} from './_components/CardAdminPainel'
import { processData } from './_components/ResultValues'
import {
  Activity,
  PiggyBank,
  Rocket,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { ListCurrentMovimentation } from './_components/ListCurrentMovimentation'
import Example from './_components/PanelChart'
import { fetchItems } from './_components/FetchItems'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const { totalIncomes, totalExpenses, totalGoals, balance } =
    await processData()

  const { incomes, expenses, goals } = await fetchItems()

  const Tinc = (): number => {
    let total = 0
    incomes.forEach((income) => {
      total += parseFloat(income.amount!)
    })
    return total
  }
  const Texp = (): number => {
    let total = 0
    expenses.forEach((expense) => {
      total += parseFloat(expense.amount!)
    })
    return total
  }
  const Tgoal = (): number => {
    let total = 0
    goals.forEach((goal) => {
      total += parseFloat(goal.amount!)
    })
    return total
  }

  return (
    <main className="grid grid-cols-8 gap-5 w-full">
      <section className="grid grid-rows-4 gap-4 col-span-2">
        <div className="row-span-4 flex flex-col gap-4">
          <CardAdmin
            titleValue="Saldo"
            titleIcon={<Activity size={14} className="text-muted-foreground" />}
            linkCurrentPage="/pages/categorias"
            amountValue={balance()}
            action={
              <AdminCardActions href="/pages/categorias">
                Ver categorias
              </AdminCardActions>
            }
          />
          <CardAdmin
            titleValue="Entrada"
            titleIcon={<TrendingUp size={14} className="text-emerald-500" />}
            linkCurrentPage="/pages/painel/ganhos"
            amountValue={totalIncomes()}
            action={
              <AdminCardActions href="/pages/painel/ganhos/new">
                Novo registro
              </AdminCardActions>
            }
          />
          <CardAdmin
            titleValue="Saida"
            titleIcon={<TrendingDown size={14} className="text-red-500" />}
            linkCurrentPage="/pages/painel/despesas"
            amountValue={totalExpenses()}
            action={
              <AdminCardActions href="/pages/painel/despesas/new">
                Novo registro
              </AdminCardActions>
            }
          />
          <CardAdmin
            titleValue="Meta"
            titleIcon={<Rocket size={14} className="text-muted-foreground" />}
            linkCurrentPage="/pages/painel/metas"
            amountValue={totalGoals()}
            action={
              <AdminCardActions href="/pages/painel/metas/new">
                Novo registro
              </AdminCardActions>
            }
          />
        </div>
      </section>
      <section className="grid grid-rows-2 col-span-6 gap-4">
        <div className="col-span-1 flex gap-4">
          <AdminCard className="w-[500px] p-4 h-full">
            <AdminCardHeader>
              <AdminCardHeaderTitle icon={<PiggyBank size={14} />}>
                Total guardado
              </AdminCardHeaderTitle>
            </AdminCardHeader>
            {/* <AdminCardContent>
              <AdminCardHeaderLink icon={<Link2 size={14} />} href="/">
                R$ 705,00
              </AdminCardHeaderLink>
              <CardDescription>Ainda faltam R$ 21.000,00</CardDescription>
            </AdminCardContent> */}
          </AdminCard>
          <Example incomes={Tinc()} expenses={Texp()} goals={Tgoal()} />
        </div>
        <div className="col-span-1">
          <ListCurrentMovimentation />
        </div>
      </section>
    </main>
  )
}
