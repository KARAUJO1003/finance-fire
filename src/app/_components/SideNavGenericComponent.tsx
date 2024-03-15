import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type SideNavGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export const SideNav = ({ children, className }: SideNavGenericProps) => {
  return (
    <aside
      className={cn(
        [
          'min-w-[248px] h-screen flex flex-col justify-between space-y-3 border',
        ],
        className,
      )}
    >
      {children}
    </aside>
  )
}

export const SideNavHeader = ({ children, className }: SideNavGenericProps) => {
  return (
    <div className={cn(['p-5 border-b flex justify-between'], className)}>
      {children}
    </div>
  )
}
export const SideNavContent = ({
  children,
  className,
}: SideNavGenericProps) => {
  return (
    <div
      className={cn(['p-5 h-full w-full flex flex-col space-y-3'], className)}
    >
      {children}
    </div>
  )
}

type SideNavLinkProps = {
  href: string
  icon?: React.ReactElement
  currentPath: string
}

export const SideNavLink = ({
  children,
  className,
  href,
  icon,
  currentPath,
}: SideNavGenericProps<SideNavLinkProps>) => {
  const isActive = href === currentPath
  return (
    <Link href={href} className={cn([''], className)}>
      <Button
        variant={isActive ? 'outline' : 'link'}
        size={'sm'}
        className="justify-start w-full "
      >
        <span>{icon}</span>
        {children}
      </Button>
    </Link>
  )
}

export const SideNavFooter = ({ children, className }: SideNavGenericProps) => {
  return (
    <div className={cn(['p-5 border-t flex justify-between'], className)}>
      {children}
    </div>
  )
}
