import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type CardAdminPainelProps = {
  title: string
  value: string
}

export const CardAdminPainel = async ({
  title,
  value,
}: CardAdminPainelProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Ver detalhes</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>{value}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button>
          <Link href={'/'}>Explorar</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
