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
import { Button } from '@/components/ui/button'
import { useSession } from 'next-auth/react'

export const SideBarNav = () => {
  const pathname = usePathname()
  const { status } = useSession()

  return (
    <SideNav className="border-border ">
      <SideNavHeader className="max-md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Image src={financefire} alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold max-md:text-md">FinanceFire</span>
        </Link>
      </SideNavHeader>
      <SideNavContent>
        <Button
          className="hover:no-underline p-0 justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<HomeIcon size={14} className="mr-2 max-md:m-0" />}
            href="/"
            currentPath={pathname}
          >
            Início
          </SideNavLink>
        </Button>
        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0 justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<LayoutDashboard size={14} className="mr-2 max-md:m-0 " />}
            href="/pages/dashboard"
            currentPath={pathname}
          >
            Painel
          </SideNavLink>
        </Button>
        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0  justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<TrendingUp size={14} className="mr-2 max-md:m-0 " />}
            href="/pages/dashboard/ganhos"
            currentPath={pathname}
          >
            Rendimentos
          </SideNavLink>
        </Button>
        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0  justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<TrendingDown size={14} className="mr-2 max-md:m-0" />}
            href="/pages/dashboard/despesas"
            currentPath={pathname}
          >
            Despesas
          </SideNavLink>
        </Button>
        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0  justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<Activity size={14} className="mr-2 max-md:m-0" />}
            href="/pages/dashboard/metas"
            currentPath={pathname}
          >
            Meta
          </SideNavLink>
        </Button>
        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0  justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<LayoutList size={14} className="mr-2 max-md:m-0" />}
            href="/pages/categories"
            currentPath={pathname}
          >
            Categorias
          </SideNavLink>
        </Button>
        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0  justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<LayoutList size={14} className="mr-2 max-md:m-0" />}
            href="/pages/details"
            currentPath={pathname}
          >
            Visão Geral
          </SideNavLink>
        </Button>
      </SideNavContent>
      <SideNavFooter>Rodapé</SideNavFooter>
    </SideNav>
  )
}
