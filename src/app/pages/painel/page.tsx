import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import {
  AdminCard,
  AdminCardActions,
  AdminCardHeader,
  AdminCardHeaderLink,
  AdminCardHeaderTitle,
  CardAdmin,
} from './_components/CardAdminPainel'
import { processData } from './_components/ResultValues'
import {
  Activity,
  Link2,
  PiggyBank,
  Rocket,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { ListCurrentMovimentation } from './_components/ListCurrentMovimentation'
import Example from './_components/PanelChart'
import { fetchItems } from './_components/FetchItems'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import prisma from '@/lib/prisma'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const { totalIncomes, totalExpenses, totalGoals, totalPiggy, balance } =
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

  const piggyData = await prisma.piggyBank.findMany({
    where: { userId: session.user.id },
  })
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <main className="grid grid-cols-8 gap-5 w-full">
      <section className="grid grid-rows-4 gap-4 col-span-2 max-xl:col-span-8">
        <div className="row-span-4 flex flex-col gap-4 max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1">
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

      <section className="grid grid-rows-2 col-span-6 gap-4 max-xl:col-span-8">
        <div className="col-span-1 flex gap-4 max-lg:flex-col">
          <AdminCard className="w-[500px] max-xl:w-full p-0 h-full bg-transparent">
            <AdminCardHeader className="space-y-2 pb-4 border-b bg-muted/20 pt-4 ">
              <AdminCardHeaderTitle icon={<PiggyBank size={14} />}>
                Total guardado
              </AdminCardHeaderTitle>
              <AdminCardHeaderLink
                icon={<Link2 size={14} />}
                href="/pages/painel/reservas"
              >
                {totalPiggy()}
              </AdminCardHeaderLink>
            </AdminCardHeader>

            <div>
              {piggyData.length === 0 && (
                <div className="  p-4 flex items-center justify-center text-muted-foreground text-sm">
                  <span>Você ainda não possui registros.</span>
                </div>
              )}
              <ScrollArea>
                <ul className="max-h-52 space-y-1 ">
                  {piggyData.map((i) => (
                    <Card key={i.id} className="border-none  bg-muted/10">
                      <li className="border-b  border-muted">
                        <CardContent className="py-2 bg-transparent flex justify-between items-center">
                          <div className="flex flex-col ">
                            <strong className="text-sm text-muted-foreground">
                              {i.description}
                            </strong>
                            <span
                              className={`${i.status === 'Depositado' ? ' text-emerald-400' : ' text-red-400'} text-opacity-80 font-medium text-xs w-fit  pl-1 `}
                            >
                              {i.status}
                            </span>
                          </div>

                          <div className="flex flex-col items-end gap-1">
                            <span className="text-xs text-muted-foreground">
                              {i.created_at?.toLocaleDateString()}
                            </span>
                            <span className="text-sm text-secondary-foreground">
                              {formatter.format(Number(i.amount))}
                            </span>
                          </div>
                        </CardContent>
                      </li>
                    </Card>
                  ))}
                </ul>
              </ScrollArea>
            </div>
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
