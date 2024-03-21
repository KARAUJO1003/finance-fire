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
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export const FormIncomes = async () => {
  const session = await getServerSession(authOptions)
  async function handleSumbmit(formData: FormData) {
    'use server'
    // console.log(formData)

    const incomeAmount = formData.get('incomeAmount') as string
    const incomeDate = formData.get('incomeDate') as string
    const status = formData.get('status') as string
    const categoryId = formData.get('categoryId') as string
    const description = formData.get('description') as string

    await prisma.incomes.create({
      data: {
        incomeAmount,
        incomeDate,
        status,
        categoryId,
        description,
        userId: session?.user.id,
      },
    })
    redirect('/pages/dashboard/ganhos')
  }

  const categories = await prisma.category.findMany()

  return (
    <form action={handleSumbmit}>
      <div className="flex flex-col items-center gap-3">
        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Titulo</Label>
          <Input
            name="status"
            placeholder="Digite um nome para seu registro.."
          />
        </div>
        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Valor</Label>
          <Input placeholder="R$" name="incomeAmount" />
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Data</Label>
          <Input name="incomeDate" type="date" />
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Categoria</Label>
          <Select name="categoryId">
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    <span>{item.name}</span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center">
          <Label>Descrição</Label>
          <Textarea
            name="description"
            placeholder="Descreva sobre seu registro..."
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
