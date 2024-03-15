'use client'
import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'
import { financialRecords } from '../../utils/db'

interface SeriesData {
  name: string
  data: { x: Date; y: number }[]
}
export const ApexChart = () => {
  const [series, setSeries] = useState<SeriesData[]>([
    {
      name: 'Income',
      data: [],
    },
    {
      name: 'Expense',
      data: [],
    },
  ])

  useEffect(() => {
    const incomeData = financialRecords.map((record) => ({
      x: record.incomeDate,
      y: record.incomeAmount,
    }))

    const expenseData = financialRecords.map((record) => ({
      x: record.expenseDate,
      y: record.expenseAmount,
    }))

    setSeries([
      { name: 'Income', data: incomeData },
      { name: 'Expense', data: expenseData },
    ])
  }, [])

  const options = {
    chart: {
      type: 'area', // Specify the chart type explicitly
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Financial Overview',
      align: 'left',
      style: {
        fontSize: '14px',
      },
    },
    xaxis: {
      type: 'datetime', // Specify the axis type explicitly
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      toolbar: {
        show: true,
      },
      tooltip: {
        enabled: false,
      },
    },
    // The rest of your options object remains unchanged
  }

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  )
}
