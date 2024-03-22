import { CardDescription } from '@/components/ui/card'
import { processData } from './ResultValues'
async function ExpenseValue() {
  const { totalExpenses } = await processData()
  return (
    <CardDescription className="text-md lg:text-xl xl:text-2xl">
      {totalExpenses()}
    </CardDescription>
  )
}
async function IncomeValue() {
  const { totalIncomes } = await processData()
  return (
    <CardDescription className="text-md lg:text-xl xl:text-2xl">
      {totalIncomes()}
    </CardDescription>
  )
}
async function GoalValue() {
  const { totalGoals } = await processData()
  return (
    <CardDescription className="text-md lg:text-xl xl:text-2xl">
      {totalGoals()}
    </CardDescription>
  )
}
async function BalanceValue() {
  const { balance } = await processData()
  return (
    <CardDescription className="text-md lg:text-xl xl:text-2xl">
      {balance()}
    </CardDescription>
  )
}

export { IncomeValue, ExpenseValue, GoalValue, BalanceValue }
