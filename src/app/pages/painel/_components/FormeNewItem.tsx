'use client'

import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { Disc2 } from 'lucide-react'
import { NewCatergoyForm } from '@/app/pages/categorias/_components/NewCatergoyForm'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { toast } from 'sonner'

type CateProps = {
  id: string
  name: string
  type: string | null
  color: string | null
  created_at: Date | null
  updated_at: Date | null
  userId: string | null
}
interface FormProps {
  handleSubmit: (formData: FormData) => Promise<void>
  categories: CateProps[]
}

const Schema = z.object({
  description: z.string().min(2, 'Digite um nome válido.'),
  amount: z.string().min(2, 'Digite um valor válido.'),
  date: z.string(),
  categoryId: z.string(),
  status: z.string(),
})

export const FormeNewItem = ({ handleSubmit, categories }: FormProps) => {
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
  })

  return (
    <Form {...form}>
      <form
        action={handleSubmit}
        onClick={() => toast.success('Item registrado com suceso')}
      >
        <div className="flex flex-col items-center max-md:items-start gap-3">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full">
                <FormLabel htmlFor="description">Descrição</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder="Descreva sobre seu registro..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full">
                <FormLabel htmlFor="amount">Valor</FormLabel>
                <FormControl>
                  <Input
                    className="w-full"
                    placeholder="Digite um valor..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full">
                <FormLabel htmlFor="date">Data</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="w-full"
                    placeholder="Digite uma data..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full">
                <FormLabel>Categoria</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={form.getValues('categoryId')}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma opção..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="py-2">
                        <NewCatergoyForm variant={'link'} type="SAIDA" />
                      </SelectGroup>
                      <SelectGroup>
                        {categories.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            <div className=" flex items-center justify-between gap-2">
                              <Disc2 size={12} color={`${item.color}`} />
                              <span>{item.name}</span>
                              <span className="capitalize text-xs text-muted-foreground">
                                {item.type?.toLowerCase()}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite um nome para seu registro.."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="w-[700px] flex justify-end max-md:w-full">
            <Button className="w-[600px] mt-5 max-md:w-full" type="submit">
              Cadastrar
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
