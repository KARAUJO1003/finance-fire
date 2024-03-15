import { CardMovimentations } from '@/app/_components/CardMovimentations'
import { ApexChart } from '@/app/_components/ChartFinance'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex gap-4 w-full">
        <CardMovimentations />
        <CardMovimentations />
        <CardMovimentations />
      </div>
      <ApexChart />
    </div>
  )
}
