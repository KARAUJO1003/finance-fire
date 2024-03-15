export interface FinancialRecord {
  id: string
  userId: string
  incomeAmount: number
  expenseAmount: number
  incomeDate: Date
  expenseDate: Date
  goalAmount: number
  goalDate: Date
}

export const financialRecords: FinancialRecord[] = [
  {
    id: '1',
    userId: 'user1',
    incomeAmount: 2000,
    expenseAmount: -1500,
    incomeDate: new Date('2023-01-01'),
    expenseDate: new Date('2023-01-15'),
    goalAmount: 5000,
    goalDate: new Date('2023-06-01'),
  },
  {
    id: '2',
    userId: 'user2',
    incomeAmount: 2500,
    expenseAmount: 2000,
    incomeDate: new Date('2023-02-01'),
    expenseDate: new Date('2023-02-18'),
    goalAmount: 6000,
    goalDate: new Date('2023-07-01'),
  },
  {
    id: '3',
    userId: 'user3',
    incomeAmount: 300,
    expenseAmount: 200,
    incomeDate: new Date('2023-03-01'),
    expenseDate: new Date('2023-03-16'),
    goalAmount: 7000,
    goalDate: new Date('2023-08-01'),
  },
  {
    id: '4',
    userId: 'user4',
    incomeAmount: -3500,
    expenseAmount: 2500,
    incomeDate: new Date('2023-04-01'),
    expenseDate: new Date('2023-04-15'),
    goalAmount: 8000,
    goalDate: new Date('2023-09-01'),
  },
  {
    id: '5',
    userId: 'user5',
    incomeAmount: 4000,
    expenseAmount: -3000,
    incomeDate: new Date('2023-05-01'),
    expenseDate: new Date('2023-05-15'),
    goalAmount: 9000,
    goalDate: new Date('2023-10-01'),
  },
]
