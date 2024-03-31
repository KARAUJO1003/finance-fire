import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type GenericMobileProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

const MobileListContainer = ({ children, className }: GenericMobileProps) => {
  return (
    <div className={cn(['max-md:block hidden space-y-4'], className)}>
      <Button className="gap-2">
        <PlusIcon size={16} />
        <Link href="/pages/painel/reservas/new">Novo Registro</Link>
      </Button>
      <ul className="gap-3 flex flex-col">{children}</ul>
    </div>
  )
}

type MobileListItemProps = {
  key: string
}

const MobileListItem = ({
  children,
  className,
  key,
}: GenericMobileProps<MobileListItemProps>) => {
  return (
    <li key={key}>
      <Card
        className={cn(
          ['py-2 flex justify-between items-center p-3'],
          className,
        )}
      >
        {children}
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
}: MobileItemProps) => {
  return (
    <MobileList.MobileListItem key={key} className={cn([], className)}>
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
