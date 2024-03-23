import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import React from 'react'
import { AdminCardHeaderLink } from './CardAdminPainel'
import { SquareArrowOutUpRight } from 'lucide-react'

export async function CardAdminCategories() {
  return (
    <div>
      <Card className="overflow-hidden">
        <CardHeader className="w-full text-md flex flex-row justify-between items-center bg-muted/50 py-3">
          <AdminCardHeaderLink
            href="/"
            icon={<SquareArrowOutUpRight size={14} />}
          >
            Categorias
          </AdminCardHeaderLink>
          <span>Valor</span>
        </CardHeader>
        <CardContent className="flex items-center justify-between py-2 border-b last:border-none">
          <div>
            <CardTitle>Salario</CardTitle>
            <CardDescription>Descriçao</CardDescription>
          </div>
          <div>
            <CardTitle>R$ 2.233,12</CardTitle>
          </div>
        </CardContent>
        <CardContent className="flex items-center justify-between py-2 border-b last:border-none">
          <div>
            <CardTitle>Salario</CardTitle>
            <CardDescription>Descriçao</CardDescription>
          </div>
          <div>
            <CardTitle>R$ 2.233,12</CardTitle>
          </div>
        </CardContent>
        <CardContent className="flex items-center justify-between py-2 border-b last:border-none">
          <div>
            <CardTitle>Salario</CardTitle>
            <CardDescription>Descriçao</CardDescription>
          </div>
          <div>
            <CardTitle>R$ 2.233,12</CardTitle>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
