'use client'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { PlusIcon } from 'lucide-react'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  incomeAmount: z.number(),
  expenseAmount: z.number(),
  incomeDate: z.date(),
  expenseDate: z.date(),
  goalAmount: z.number(),
  goalDate: z.date(),
})

export function FormCreate() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      incomeAmount: 0,
      expenseAmount: 0,
      incomeDate: new Date(),
      expenseDate: new Date(),
      goalAmount: 0,
      goalDate: new Date(),
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button>
              <PlusIcon size={18} />
              <span className="ml-2">Novo registro</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={'right'}>
            <FormField
              control={form.control}
              name="incomeAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Income Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="0" {...field} />
                  </FormControl>
                  <FormDescription>Enter your income amount.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expenseAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expense Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="0" {...field} />
                  </FormControl>
                  <FormDescription>Enter your expense amount.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="incomeDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Income Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Select the date of your income.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expenseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expense Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                  </FormControl>
                  <FormDescription>
                    Select the date of your expense.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </SheetContent>
        </Sheet>
      </form>
    </Form>
  )
}
