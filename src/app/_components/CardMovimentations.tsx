import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import React from 'react'

type CardProps = {
  cardtitle: string
  carddescription: string
  cardicon: React.ReactElement
  cardvalue: string
  cardbutton: string
}

export const CardMovimentations = ({
  cardtitle,
  carddescription,
  cardicon,
  cardvalue,
  cardbutton,
}: CardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{cardtitle}</CardTitle>
        <CardDescription>{carddescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2 text-emerald-500">
        <span>{cardicon}</span>
        {/* <ArrowUpRight size={24} /> */}
        <CardDescription className="text-3xl">{cardvalue}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant={'outline'}>{cardbutton}</Button>
      </CardFooter>
    </Card>
  )
}
