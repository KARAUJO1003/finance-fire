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
      { name: 'Receita', data: incomeData },
      { name: 'Despesa', data: expenseData },
    ])
  }, [])

  const options = {
    series,
    chart: {
      type: 'area', // Specify the chart type explicitly
      height: 350,
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false,
        },
        export: {
          show: false,
        },
        autoSelected: 'zoom',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Movimentações',
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
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        hideEmptySeries: true,
        fillSeriesColor: false,
        theme: false,
        style: {
          fontSize: '12px',
          fontFamily: undefined,
        },
        onDatasetHover: {
          highlightDataSeries: false,
        },
        x: {
          show: true,
          format: 'dd MMM',
          formatter: undefined,
        },
        y: {
          formatter: undefined,
          title: {
            formatter: (series) => series.name,
          },
        },
        z: {
          formatter: undefined,
          title: 'Size: ',
        },
        marker: {
          show: true,
        },
        fixed: {
          enabled: false,
          position: 'topRight',
          offsetX: 0,
          offsetY: 0,
        },
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
