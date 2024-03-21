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

export const FormIncomes = async () => {
  async function handleSumbmit(formData: FormData) {
    'use server'
    console.log(formData)
  }

  const categories = await prisma.category.findMany()

  return (
    <form action={handleSumbmit}>
      <div className=" gap-3 grid grid-cols-3">
        <div className="col-span-3">
          Income Amount
          <Input placeholder="Digite algo" name="incomeAmount" />
        </div>

        <div className="col-span-1">
          Income Date
          <Input name="incomeDate" type="date" />
        </div>

        <div className="col-span-2">
          Status
          <Input name="status" placeholder="Digite algo" />
        </div>

        <div className="flex flex-col">
          Categoria
          <Select name="categoryId">
            <SelectTrigger>
              <SelectValue />
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

        <div className="col-span-2">
          Description
          <Input type="text" name="description" />
        </div>

        <Button type="submit">Cadastrar</Button>
      </div>
    </form>
  )
}
