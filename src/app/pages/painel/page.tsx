import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { AdminCardActions, CardAdmin } from './_components/CardAdminPainel'
import { processData } from './_components/ResultValues'
import { Activity, Rocket, TrendingDown, TrendingUp } from 'lucide-react'
import { CardAdminCategories } from './_components/CardAdminCategories'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const { totalIncomes, totalExpenses, totalGoals, balance } =
    await processData()

  return (
    <main className="grid grid-cols-8 gap-5 w-full">
      <section className="grid grid-rows-4 gap-4 col-span-2">
        <CardAdmin
          titleValue="Saldo"
          titleIcon={<Activity size={14} className="text-muted-foreground" />}
          linkCurrentPage="/pages/painel/painel"
          amountValue={balance()}
          action={<AdminCardActions href="/">Ver categorias</AdminCardActions>}
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
      </section>
      <section className="grid grid-rows-2 col-span-6 gap-4">
        <div className="col-span-1">
          <CardAdminCategories />
        </div>
        <div className="col-span-1">
          <CardAdminCategories />
        </div>
      </section>
    </main>
  )
}
