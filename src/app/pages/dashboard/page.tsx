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
import { Activity, TrendingDown, TrendingUp, WalletCards } from 'lucide-react'
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
      <div className="flex gap-4 w-full max-md:flex-col" ref={cardRef01}>
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
          cardvalue={`R$ ${financialRecords.reduce((acc, curr) => acc + (curr.incomeAmount + curr.expenseAmount), 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          cardbutton="Explorar"
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
          cardvalue={`R$ ${financialRecords.reduce((acc, curr) => acc + curr.incomeAmount, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
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
          cardvalue={`R$ ${financialRecords.reduce((acc, curr) => acc + curr.expenseAmount, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
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
          cardvalue={`R$ ${financialRecords.reduce((acc, curr) => acc + curr.goalAmount, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
          cardbutton="Ver Detalhes"
          href="/pages/dashboard/investimentos"
        />
      </div>
      <div className="flex w-full gap-5 max-md:flex-col-reverse">
        <ScrollArea className="w-full rounded-md border" ref={cardRef02}>
          <DataTable
            columns={columns}
            data={data}
            className="w-full  p-5 max-h-[350px]  max-md:hidden"
          />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <Card className="w-full max-md:mb-10" ref={cardRef03}>
          <CatdFinance />
        </Card>
      </div>
    </div>
  )
}
