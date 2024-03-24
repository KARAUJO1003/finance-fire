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
import { Link2 } from 'lucide-react'

type CardAdminPainelGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
  icon?: ReactElement
} & T

const AdminCard = ({ children, className }: CardAdminPainelGenericProps) => {
  return (
    <Card className={cn(['py-4 bg-muted/20 h-fit'], className)}>
      {children}
    </Card>
  )
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
        ['flex items-center p-0 gap-2 text-xl hover:underline rounded'],
        className,
      )}
    >
      <span>{icon}</span>
      <Link href={href}>{children}</Link>
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
        ['text-2xl font-semibold px-4 py-4 text-muted-foreground'],
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
        variant="secondary"
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
}

export const CardAdmin = ({
  titleIcon,
  amountValue,
  linkCurrentPage,
  titleValue,
  action,
}: CardAdminPainelProps) => {
  return (
    <AdminCard>
      <AdminCardHeader>
        <AdminCardHeaderTitle icon={titleIcon}>
          {titleValue}
        </AdminCardHeaderTitle>
      </AdminCardHeader>
      <AdminCardContent>
        <AdminCardHeaderLink href={linkCurrentPage} icon={<Link2 size={12} />}>
          {amountValue}
        </AdminCardHeaderLink>
      </AdminCardContent>

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
