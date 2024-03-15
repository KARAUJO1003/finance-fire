import { CardMovimentations } from '@/app/_components/CardMovimentations'
import { AreaChart, TrendingDown, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex gap-4 w-full">
        <CardMovimentations
          cardtitle="Ganhos Recentes"
          carddescription="Detalhes"
          cardicon={<TrendingUp size={24} />}
          cardvalue="R$ 2.500,00"
          cardbutton="Explorar"
        />
        <CardMovimentations
          cardtitle="Despesas do Mês"
          carddescription="Ver Mais"
          cardicon={<TrendingDown size={24} color={'#EF4444'} />}
          cardvalue="R$ 1.200,00"
          cardbutton="Analisar"
        />
        <CardMovimentations
          cardtitle="Investimentos"
          carddescription="Performance"
          cardicon={<AreaChart size={24} />}
          cardvalue="R$ 4.000,00"
          cardbutton="Ver Detalhes"
        />
      </div>
      {/* <ApexChart /> */}
    </div>
  )
}
