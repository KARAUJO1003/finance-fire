import { CardsDashboard } from '@/app/pages/painel/_components/CardsDashboard'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <CardsDashboard />
      {/* <h1> hello</h1> */}
    </div>
  )
}
