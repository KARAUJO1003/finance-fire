'use client'

import { ColumnDef } from '@tanstack/react-table'

// This type is used to define the shape of our data based on the FinancialRecord from @db.ts.
export type FinancialRecord = {
  id: string
  userId: string
  incomeAmount: number
  expenseAmount: number
  incomeDate: Date
  expenseDate: Date
  goalAmount: number
  goalDate: Date
}

export const columns: ColumnDef<FinancialRecord>[] = [
  {
    accessorKey: 'userId',
    header: 'User ID',
  },
  {
    accessorKey: 'incomeAmount',
    header: 'Income Amount',
  },
  {
    accessorKey: 'expenseAmount',
    header: 'Expense Amount',
  },
  {
    accessorKey: 'goalAmount',
    header: 'Goal Amount',
  },
]
