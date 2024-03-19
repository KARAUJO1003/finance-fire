'use client'
import React from 'react'
// import { DataTable } from '@/app/_components/movimentations/data-table'
// import { columns } from '@/app/_components/movimentations/columns'
// import { FinancialRecord, financialRecords } from '@/utils/db'
import { DataTableDemo } from '@/app/_components/DataTableDemo'

export default function Details() {
  // const [data, setData] = useState<FinancialRecord[]>([])

  // useEffect(() => {
  //   setData(financialRecords)
  // }, [])

  return (
    <div>
      <DataTableDemo />
      {/* <DataTable columns={columns} data={data} /> */}
    </div>
  )
}
