import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { EllipsisVertical, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { DeleteButtom } from '@/app/pages/painel/_components/DeleteButtom'

type GenericMobileProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

type MobileContainerProps = {
  urlNew: 'reservas' | 'metas' | 'ganhos' | 'despesas'
}

const MobileListContainer = ({
  children,
  className,
  urlNew,
}: GenericMobileProps<MobileContainerProps>) => {
  return (
    <div className={cn(['max-md:block hidden space-y-4'], className)}>
      <Button className="gap-2">
        <PlusIcon size={16} />
        <Link href={`/pages/painel/${urlNew}/new`}>Novo Registro</Link>
      </Button>
      <ul className="gap-3 flex flex-col">{children}</ul>
    </div>
  )
}

type MobileListItemProps = {
  key: string
  id: string
  routename: 'goals' | 'incomes' | 'expenses' | 'piggybank'
}

const MobileListItem = ({
  children,
  className,
  key,
  id,
  routename,
}: GenericMobileProps<MobileListItemProps>) => {
  return (
    <li key={key}>
      <Card
        className={cn(
          ['py-2 flex justify-between items-center p-3'],
          className,
        )}
      >
        <div className="flex justify-between w-full mr-3">{children}</div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left">
            <DeleteButtom id={id} routeName={routename} />
          </DropdownMenuContent>
        </DropdownMenu>
      </Card>
    </li>
  )
}

const MobileListItemTitle = ({ children, className }: GenericMobileProps) => {
  return <strong className={cn(['text-sm'], className)}>{children}</strong>
}

const MobileListItemDescription = ({
  children,
  className,
}: GenericMobileProps) => {
  return (
    <span className={cn(['text-xs text-zinc-400'], className)}>{children}</span>
  )
}

type MobileListItemGroupProps = {
  sideGroup?: 'left' | 'right'
}

const MobileListItemGroup = ({
  children,
  className,
  sideGroup = 'left',
}: GenericMobileProps<MobileListItemGroupProps>) => {
  const SideGroup =
    sideGroup === 'left' ? 'items-start' : 'flex flex-col items-end justify-end'
  return (
    <div className={cn(['flex flex-col gap-2' + SideGroup], className)}>
      {children}
    </div>
  )
}

const MobileList = {
  MobileListContainer,
  MobileListItem,
  MobileListItemTitle,
  MobileListItemDescription,
  MobileListItemGroup,
}

export default MobileList

type MobileItemProps = {
  title: string
  description: string
  amount: string
  className?: string
  key: string
  date: string
  status: string
  user: string
  id: string
  routename: 'goals' | 'incomes' | 'expenses' | 'piggybank'
}

export const MobileItem = ({
  title,
  amount,
  description,
  date,
  status,
  user,
  className,
  key,
  id,
  routename,
}: MobileItemProps) => {
  return (
    <MobileList.MobileListItem
      routename={routename}
      id={id}
      key={key}
      className={cn([], className)}
    >
      <MobileList.MobileListItemGroup>
        <MobileList.MobileListItemTitle>{title}</MobileList.MobileListItemTitle>
        <MobileList.MobileListItemDescription>
          {description}
        </MobileList.MobileListItemDescription>
        <MobileList.MobileListItemDescription>
          {amount}
        </MobileList.MobileListItemDescription>
      </MobileList.MobileListItemGroup>

      <MobileList.MobileListItemGroup sideGroup="right">
        <MobileList.MobileListItemDescription>
          {date}
        </MobileList.MobileListItemDescription>
        <MobileList.MobileListItemDescription>
          {user}
        </MobileList.MobileListItemDescription>
        <MobileList.MobileListItemDescription>
          {status}
        </MobileList.MobileListItemDescription>
      </MobileList.MobileListItemGroup>
    </MobileList.MobileListItem>
  )
}
