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

type FormPiggyBankProps = {
  urlPage: string
}

export const FormPiggyBank = async ({ urlPage }: FormPiggyBankProps) => {
  const session = await getServerSession(authOptions)
  async function handleSumbmit(formData: FormData) {
    'use server'
    const amount = formData.get('amount') as string
    const date = formData.get('date') as string
    const status = formData.get('status') as string
    const goalsId = formData.get('goalsId') as string
    const description = formData.get('description') as string

    await prisma.piggyBank.create({
      data: {
        amount,
        date,
        status,
        goalsId,
        description,
        userId: session?.user.id,
      },
    })
    redirect(`/pages/painel/${urlPage}`)
  }

  const goals = await prisma.goal.findMany({
    include: {
      category: true,
    },
  })

  return (
    <form action={handleSumbmit}>
      <div className=" flex flex-col items-center gap-3">
        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full max-md:gap-2">
          <Label>Descrição</Label>
          <Input
            name="description"
            placeholder="Descreva sobre seu registro..."
          />
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full max-md:gap-2">
          <Label>Meta</Label>
          <Input placeholder="R$" name="amount" />
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full max-md:gap-2">
          <Label>Data</Label>
          <Input name="date" type="date" />
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full max-md:gap-2">
          <Label>Meta</Label>
          <Select name="goalsId">
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {goals.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    <div className="flex flex-col">
                      <span className="text-sm">{item.description}</span>

                      <span className="text-xs text-muted-foreground">
                        {item.category?.name}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-full grid grid-cols-[100px_minmax(600px,500px)] items-center max-md:flex max-md:flex-col max-md:items-start max-md:w-full max-md:gap-2">
          <Label>Status</Label>
          <Select name="status" defaultValue={'Depositado'}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Depositado">Depositado</SelectItem>
                <SelectItem value="Não Depositado">Não Depositado</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-[700px] flex justify-end max-md:w-full">
          <Button className="w-[600px] mt-5 max-md:w-full" type="submit">
            Cadastrar
          </Button>
        </div>
      </div>
    </form>
  )
}
