'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

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
    header: 'Usuário',
  },
  {
    accessorKey: 'incomeAmount',
    header: () => <div className="text-right">Receita</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('incomeAmount'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'expenseAmount',
    header: () => <div className="text-right">Despesa</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('expenseAmount'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'goalAmount',
    header: () => <div className="text-right">Meta</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('goalAmount'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: 'actions',
    size: 10,
    enableHiding: false,
    cell: ({ row }) => {
      const movimentations = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size={'icon'}>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(movimentations.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
