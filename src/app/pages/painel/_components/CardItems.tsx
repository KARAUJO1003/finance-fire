import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

type CardProps = {
  cardtitle: string
  carddescription: string
  cardicon?: React.ReactElement
  cardvalue?: React.ReactElement
  cardbutton: string
  href: string
}

export const CardMovimentations = async ({
  cardtitle,
  carddescription,
  cardicon,
  cardvalue,
  cardbutton,
  href,
  ...rest
}: CardProps & React.HTMLProps<HTMLDivElement>) => {
  return (
    <Card className="w-full " {...rest}>
      <CardHeader>
        <CardTitle>{cardtitle}</CardTitle>
        <CardDescription>{carddescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-2 text-emerald-500">
        <span>{cardicon}</span>
        {cardvalue}
      </CardContent>
      <CardFooter>
        <Button variant={'outline'} size={'sm'}>
          <Link href={href}>{cardbutton}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
