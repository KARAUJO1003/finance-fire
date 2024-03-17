'use client'
import { financialRecords } from '@/utils/db'
import { AreaChart, Card, List, ListItem } from '@tremor/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const data = financialRecords.map((record) => ({
  date: record.incomeDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  }),
  Receita: record.incomeAmount > 0 ? record.incomeAmount : 0,
  Despesa: record.expenseAmount < 0 ? Math.abs(record.expenseAmount) : 0,
}))

const summary = [
  {
    name: 'Receita',
    value: data.reduce((acc, curr) => acc + curr.Receita, 0),
  },
  {
    name: 'Despesa',
    value: data.reduce((acc, curr) => acc + curr.Despesa, 0),
  },
]

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`

const statusColor: { [key: string]: string } = {
  Receita: 'bg-blue-500',
  Despesa: 'bg-violet-500',
}

export default function CatdFinance() {
  return (
    <>
      <Card className="w-full">
        <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Follower metrics
        </h3>
        <AreaChart
          data={data}
          index="date"
          categories={['Receita', 'Despesa']}
          valueFormatter={valueFormatter}
          colors={['blue', 'violet']}
          showLegend={false}
          showYAxis={false}
          showGradient={true}
          startEndOnly={true}
          className=" h-48 w-full"
          showGridLines={false}
        />
        <List className="">
          {summary.map((item) => (
            <ListItem key={item.name}>
              <div className="flex items-center space-x-2">
                <span
                  className={classNames(statusColor[item.name], 'h-0.5 w-3')}
                  aria-hidden={true}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  )
}
