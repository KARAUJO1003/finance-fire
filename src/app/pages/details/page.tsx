'use client'
import React, { useEffect, useState } from 'react'
import { DataTable } from '@/app/_components/movimentations/data-table'
import { columns } from '@/app/_components/movimentations/columns'
import { FinancialRecord, financialRecords } from '@/utils/db'

export default function Details() {
  const [data, setData] = useState<FinancialRecord[]>([])

  useEffect(() => {
    setData(financialRecords)
  }, [])

  return (
    <div>
      <DataTable columns={columns} data={data} />
      <h1>jjjj</h1>
    </div>
  )
}
