import { fetchItems } from './FetchItems'

export interface ProcessedData {
  totalExpenses: () => string
  totalIncomes: () => string
  totalGoals: () => string
  totalPiggy: () => string
  balance: () => string
}

export async function processData() {
  const { incomes, expenses, goals, piggies } = await fetchItems()
  // Use incomes, expenses, and goals here
  const totalIncomes = (): string => {
    let total = 0
    incomes.forEach((income) => {
      total += parseFloat(income.amount!)
    })
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  const totalExpenses = (): string => {
    let total = 0
    expenses.forEach((expenses) => {
      total += parseFloat(expenses.amount!)
    })
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  const totalGoals = (): string => {
    let total = 0
    goals.forEach((goal) => {
      total += parseFloat(goal.amount!)
    })
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  const totalPiggy = (): string => {
    let total = 0
    piggies.forEach((piggy) => {
      total += parseFloat(piggy.amount!)
    })
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const balance = (): string => {
    function Income() {
      let total = 0
      incomes.forEach((income) => {
        total += parseFloat(income.amount!)
      })
      return total
    }
    function Expense() {
      let total = 0
      expenses.forEach((expense) => {
        total += parseFloat(expense.amount!)
      })
      return total
    }
    const sum = Income() - Expense()

    return sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return { totalIncomes, totalExpenses, totalGoals, totalPiggy, balance }
}
