'use client'

import {
  Activity,
  HomeIcon,
  LayoutDashboard,
  LayoutList,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
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
          icon={<LayoutDashboard size={14} className="mr-2" />}
          href="/pages/dashboard"
          currentPath={pathname}
        >
          Dashboard
        </SideNavLink>
        <SideNavLink
          icon={<TrendingUp size={14} className="mr-2" />}
          href="/pages/dashboard/ganhos"
          currentPath={pathname}
        >
          Receita
        </SideNavLink>
        <SideNavLink
          icon={<TrendingDown size={14} className="mr-2" />}
          href="/pages/dashboard/despesas"
          currentPath={pathname}
        >
          Despesa
        </SideNavLink>
        <SideNavLink
          icon={<Activity size={14} className="mr-2" />}
          href="/pages/dashboard/investimentos"
          currentPath={pathname}
        >
          Investimentos
        </SideNavLink>
        <SideNavLink
          icon={<LayoutList size={14} className="mr-2" />}
          href="/pages/details"
          currentPath={pathname}
        >
          Overview
        </SideNavLink>
      </SideNavContent>
      <SideNavFooter>Footer</SideNavFooter>
    </SideNav>
  )
}
