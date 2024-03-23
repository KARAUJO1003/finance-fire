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
    <main className="flex flex-col gap-5 w-full">
      <section className="grid grid-cols-4 gap-4">
        <CardAdmin
          titleValue="Saldo"
          titleIcon={<Activity size={14} className="text-muted-foreground" />}
          linkCurrentPage="/"
          linkValue="Ver detalhes"
          amountValue={balance()}
          action={<AdminCardActions href="/">Ver categorias</AdminCardActions>}
        />
        <CardAdmin
          titleValue="Entrada"
          titleIcon={<TrendingUp size={14} className="text-emerald-500" />}
          linkCurrentPage="/"
          linkValue="Ver detalhes"
          amountValue={totalIncomes()}
          action={<AdminCardActions href="/">Novo registro</AdminCardActions>}
        />
        <CardAdmin
          titleValue="Saida"
          titleIcon={<TrendingDown size={14} className="text-red-500" />}
          linkCurrentPage="/"
          linkValue="Ver detalhes"
          amountValue={totalExpenses()}
          action={<AdminCardActions href="/">Novo registro</AdminCardActions>}
        />
        <CardAdmin
          titleValue="Meta"
          titleIcon={<Rocket size={14} className="text-muted-foreground" />}
          linkCurrentPage="/"
          linkValue="Ver detalhes"
          amountValue={totalGoals()}
          action={<AdminCardActions href="/">Novo registro</AdminCardActions>}
        />
      </section>
      <section className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <CardAdminCategories />
        </div>
        <div className="col-span-1">Chart</div>
      </section>
    </main>
  )
}
