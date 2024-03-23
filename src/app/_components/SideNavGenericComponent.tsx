import { buttonVariants } from '@/components/ui/button'
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
          'min-w-[248px] h-screen flex flex-col justify-between space-y-3 border max-md:w-full max-md:h-fit max-md:fixed max-md:bottom-0 max-md:z-20 max-md:border-none',
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
    <div
      className={cn(
        ['p-5 border-b flex items-center gap-2 max-md:bg-zinc-950'],
        className,
      )}
    >
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
      className={cn(
        [
          'p-5 h-full w-full flex flex-col space-y-3 max-md:flex max-md:flex-row max-md:h-auto max-md:items-center max-md:justify-around  max-md:bg-zinc-950 max-md:py-2 max-md:space-y-0',
        ],
        className,
      )}
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
    <Link
      href={href}
      className={cn(
        [
          `${buttonVariants({ variant: isActive ? 'default' : 'link' })} hover:no-underline max-md:p-2.5 w-full gap-2`,
        ],
        className,
      )}
    >
      <span className="flex items-center justify-center m-0 p-0">{icon}</span>

      <span
        className={`
           hover:no-underline pl-0 justify-start text-start lg:w-full max-md:hidden`}
      >
        {children}
      </span>
    </Link>
  )
}

export const SideNavFooter = ({ children, className }: SideNavGenericProps) => {
  return (
    <div
      className={cn(
        ['p-5 border-t flex justify-between max-md:hidden'],
        className,
      )}
    >
      {children}
    </div>
  )
}
