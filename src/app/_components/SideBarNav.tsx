'use client'

import { BarChart, HomeIcon, ListCollapse } from 'lucide-react'
import {
  SideNav,
  SideNavHeader,
  SideNavContent,
  SideNavLink,
  SideNavFooter,
} from './SideNavGenericComponent'
import { usePathname } from 'next/navigation'

export const SideBarNav = () => {
  const pathname = usePathname()

  return (
    <SideNav className="border-border">
      <SideNavHeader>Header</SideNavHeader>
      <SideNavContent>
        <SideNavLink
          icon={<HomeIcon size={14} className="mr-2" />}
          href="/"
          currentPath={pathname}
        >
          Home
        </SideNavLink>
        <SideNavLink
          icon={<BarChart size={14} className="mr-2" />}
          href="/pages/dashboard"
          currentPath={pathname}
        >
          Dashboard
        </SideNavLink>
        <SideNavLink
          icon={<ListCollapse size={14} className="mr-2" />}
          href="/pages/details"
          currentPath={pathname}
        >
          Details
        </SideNavLink>
      </SideNavContent>
      <SideNavFooter>Footer</SideNavFooter>
    </SideNav>
  )
}
