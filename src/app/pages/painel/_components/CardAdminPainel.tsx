import React, { ReactElement } from 'react'
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
import { cn } from '@/lib/utils'

type CardAdminPainelGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
  icon?: ReactElement
} & T

const AdminCard = ({ children, className }: CardAdminPainelGenericProps) => {
  return <Card className={cn(['py-4'], className)}>{children}</Card>
}
const AdminCardHeader = ({
  children,
  className,
}: CardAdminPainelGenericProps) => {
  return (
    <CardHeader className={cn(['px-4 py-0'], className)}>{children}</CardHeader>
  )
}

const AdminCardHeaderTitle = ({
  children,
  className,
  icon,
}: CardAdminPainelGenericProps) => {
  return (
    <CardTitle className={cn(['flex items-center gap-2'], className)}>
      {icon}
      <span>{children}</span>
    </CardTitle>
  )
}

type AdminCardHeaderLinkProps = {
  href: string
}

const AdminCardHeaderLink = ({
  children,
  className,
  icon,
  href,
}: CardAdminPainelGenericProps<AdminCardHeaderLinkProps>) => {
  return (
    <CardDescription
      className={cn(
        ['flex items-center p-0 gap-2 hover:underline rounded'],
        className,
      )}
    >
      <Link href={href}>{children}</Link>
      <span>{icon}</span>
    </CardDescription>
  )
}

const AdminCardContent = ({
  children,
  className,
}: CardAdminPainelGenericProps) => {
  return (
    <CardContent
      className={cn(
        ['text-2xl font-semibold px-4 py-3 text-muted-foreground'],
        className,
      )}
    >
      <h4>{children}</h4>
    </CardContent>
  )
}

const AdminCardActions = ({
  children,
  className,
  href,
}: CardAdminPainelGenericProps<AdminCardHeaderLinkProps>) => {
  return (
    <CardFooter className="px-4 py-0">
      <Button
        variant="outline"
        size="sm"
        className={cn([''], className)}
        asChild
      >
        <Link href={href}> {children}</Link>
      </Button>
    </CardFooter>
  )
}

type CardAdminPainelProps = {
  titleValue?: string
  linkValue?: string
  amountValue?: string
  action?: ReactElement
  linkCurrentPage: string
  titleIcon?: ReactElement
  linkIcon: ReactElement
}

export const CardAdmin = ({
  titleIcon,
  amountValue,
  linkCurrentPage,
  linkValue,
  linkIcon,
  titleValue,
  action,
}: CardAdminPainelProps) => {
  return (
    <AdminCard>
      <AdminCardHeader>
        <AdminCardHeaderTitle icon={titleIcon}>
          {titleValue}
        </AdminCardHeaderTitle>
        <AdminCardHeaderLink href={linkCurrentPage} icon={linkIcon}>
          {linkValue}
        </AdminCardHeaderLink>
      </AdminCardHeader>
      <AdminCardContent>{amountValue}</AdminCardContent>
      {action}
    </AdminCard>
  )
}
export {
  AdminCard,
  AdminCardHeader,
  AdminCardHeaderTitle,
  AdminCardHeaderLink,
  AdminCardContent,
  AdminCardActions,
}
