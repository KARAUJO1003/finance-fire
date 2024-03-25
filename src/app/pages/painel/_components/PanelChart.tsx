'use client'

import React, { useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

interface DataItem {
  name: string
  value: number
}

interface RenderActiveShapeProps {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  startAngle: number
  endAngle: number
  fill: string
  payload: DataItem
  percent: number
  value: string
}

const renderActiveShape = (props: RenderActiveShapeProps): JSX.Element => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        className="text-xs"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={'#1d4ed8'}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={'#3b82f6'}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        className="text-xs"
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#3b82f6"
      >{`${Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</text>
      <text
        className="text-xs"
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="gray"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  )
}

type PieChartComponentProps = {
  incomes: number
  expenses: number
  goals: number
}

const PieChartComponent = ({
  incomes,
  expenses,
  goals,
}: PieChartComponentProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const data: DataItem[] = [
    { name: 'Rendas', value: incomes },
    { name: 'Despesas', value: expenses },
    { name: 'Metas', value: goals },
  ]

  const onPieEnter = (
    _: React.MouseEvent<SVGElement, MouseEvent>,
    index: number,
  ) => {
    setActiveIndex(index)
  }

  return (
    <ResponsiveContainer
      className={' border rounded-xl h-max w-full max-lg:min-h-80 '}
    >
      <PieChart className="w-fit h-fit ">
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#3b82f6"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default PieChartComponent
