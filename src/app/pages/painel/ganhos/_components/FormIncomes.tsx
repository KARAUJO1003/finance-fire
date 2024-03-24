import React from 'react'

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
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Label } from '@/components/ui/label'
import { Disc2 } from 'lucide-react'
import { NewCatergoyForm } from '@/app/pages/categorias/_components/NewCatergoyForm'

export const FormIncomes = async () => {
  const session = await getServerSession(authOptions)
  async function handleSumbmit(formData: FormData) {
    'use server'

    const amount = formData.get('amount') as string
    const date = formData.get('date') as string
    const status = formData.get('status') as string
    const categoryId = formData.get('categoryId') as string
    const description = formData.get('description') as string

    await prisma.incomes.create({
      data: {
        amount,
        date,
        status,
        categoryId,
        description,
        userId: session?.user.id,
      },
    })

    redirect('/pages/painel/ganhos')
  }

  const categories = await prisma.category.findMany({
    where: { type: 'ENTRADA' },
  })

  return (
    <form action={handleSumbmit}>
      <div className="flex flex-col items-center gap-3">
        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Descrição</Label>
          <Input
            name="description"
            placeholder="Descreva sobre seu registro..."
          />
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Valor</Label>
          <Input placeholder="R$" name="amount" />
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Data</Label>
          <Input name="date" type="date" />
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Categoria</Label>
          <Select name="categoryId">
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="py-2">
                <NewCatergoyForm variant={'link'} type="ENTRADA" />
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
        </div>
        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Status</Label>
          <Input
            name="status"
            placeholder="Digite um nome para seu registro.."
          />
        </div>

        <div className="w-[700px] flex justify-end">
          <Button className="w-[600px] mt-5 " type="submit">
            Cadastrar
          </Button>
        </div>
      </div>
    </form>
  )
}
