'use client'
import { CardMovimentations } from '@/app/_components/CardMovimentations'
import CatdFinance from '@/app/_components/ChartFinance'
import {
  FinancialRecord,
  columns,
} from '@/app/_components/movimentations/columns'
import { DataTable } from '@/app/_components/movimentations/data-table'
import { Card } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { financialRecords } from '@/utils/db'
import { Activity, TrendingDown, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Dashboard() {
  const [data, setData] = useState<FinancialRecord[]>([])

  const cardRef01 = useRef(null)
  const cardRef02 = useRef(null)
  const cardRef03 = useRef(null)

  const tl = gsap.timeline({
    defaults: {
      duration: 1,
    },
  })

  tl.fromTo(
    cardRef01.current,
    {
      opacity: 0,
      y: -100,
    },
    {
      opacity: 1,
      y: 0,
    },
  )
    .fromTo(
      cardRef02.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      },
      '-=.50',
    )
    .fromTo(
      cardRef03.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      },
      '-=.75',
    )

  useEffect(() => {
    setData(financialRecords)
  }, [])
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex gap-4 w-full" ref={cardRef01}>
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
          cardicon={<Activity size={24} color={'gray'} />}
          cardvalue="R$ 4.000,00"
          cardbutton="Ver Detalhes"
        />
      </div>
      <div className="flex w-full  gap-5">
        <ScrollArea className="w-full rounded-md border" ref={cardRef02}>
          <DataTable
            columns={columns}
            data={data}
            className="w-full  p-5 max-h-[350px] "
          />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <Card className="w-full" ref={cardRef03}>
          <CatdFinance />
        </Card>
      </div>
    </div>
  )
}
