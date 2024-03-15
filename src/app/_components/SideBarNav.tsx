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
import financefire from '../../../public/financefire.png'
import Image from 'next/image'
import Link from 'next/link'

export const SideBarNav = () => {
  const pathname = usePathname()

  return (
    <SideNav className="border-border">
      <SideNavHeader>
        <Link href="/" className="flex items-center gap-2">
          <Image src={financefire} alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold">FinanceFire</span>
        </Link>
      </SideNavHeader>
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
