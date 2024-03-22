'use client'

// import { Card } from '@/components/ui/card'
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useRef } from 'react'
import gsap from 'gsap'
// import { PainelCards } from './PainelCards'
import { BalanceValue, ExpenseValue, GoalValue, IncomeValue } from './CardValue'
import { CardMovimentations } from './CardItems'
import { Activity, TrendingDown, TrendingUp, WalletCards } from 'lucide-react'

export const CardsDashboard = () => {
  const cardRef01 = useRef(null)
  // const cardRef02 = useRef(null)
  // const cardRef03 = useRef(null)

  gsap.config({
    nullTargetWarn: false,
  })
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
  // .fromTo(
  //   cardRef02.current,
  //   {
  //     opacity: 0,
  //     y: 100,
  //   },
  //   {
  //     opacity: 1,
  //     y: 0,
  //   },
  //   '-=.50',
  // )
  // .fromTo(
  //   cardRef03.current,
  //   {
  //     opacity: 0,
  //     y: 100,
  //   },
  //   {
  //     opacity: 1,
  //     y: 0,
  //   },
  //   '-=.75',
  // )

  return (
    <>
      <div
        className=" gap-4 w-full grid grid-cols-4 max-[1186px]:grid-cols-2 max-[425px]:grid-cols-1"
        ref={cardRef01}
      >
        <div className="flex justify-between gap-5 col-span-full">
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
            cardvalue={<IncomeValue />}
            cardbutton="Ver mais"
            href="/pages/painel/ganhos"
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
            cardvalue={<ExpenseValue />}
            cardbutton="Explorar"
            href="/pages/painel/ganhos"
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
            cardvalue={<BalanceValue />}
            cardbutton="Analisar"
            href="/pages/painel/despesas"
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
            cardvalue={<GoalValue />}
            cardbutton="Ver Detalhes"
            href="/pages/painel/metas"
          />
        </div>
      </div>
      {/*
      <div className="grid grid-cols-2 w-full gap-5 max-lg:grid-cols-1 ">
        <ScrollArea className="w-full rounded-md border" ref={cardRef02}>
          <p>Table</p>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <Card className="w-full max-md:mb-10" ref={cardRef03}>
          <p>chart</p>
        </Card>
      </div> */}
    </>
  )
}
