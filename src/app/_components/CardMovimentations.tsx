import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export const CardMovimentations = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Últimas movimentações</CardTitle>
        <CardDescription>Ver todas</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2 text-emerald-500">
        <ArrowUpRight size={24} />
        <CardDescription className="text-3xl">R$ 1.000,00</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant={'outline'}>Ver todas</Button>
      </CardFooter>
    </Card>
  )
}
