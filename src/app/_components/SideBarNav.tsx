'use client'

import {
  Blocks,
  HomeIcon,
  LayoutDashboard,
  PiggyBank,
  Rocket,
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
        {status === 'unauthenticated' && (
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
        )}

        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0 justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<LayoutDashboard size={14} className="mr-2 max-md:m-0 " />}
            href="/pages/painel"
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
            href="/pages/painel/ganhos"
            currentPath={pathname}
          >
            Receita
          </SideNavLink>
        </Button>

        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0  justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<TrendingDown size={14} className="mr-2 max-md:m-0" />}
            href="/pages/painel/despesas"
            currentPath={pathname}
          >
            Despesa
          </SideNavLink>
        </Button>

        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0  justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<Rocket size={14} className="mr-2 max-md:m-0" />}
            href="/pages/painel/metas"
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
            icon={<PiggyBank size={14} className="mr-2 max-md:m-0" />}
            href="/pages/painel/reservas"
            currentPath={pathname}
          >
            Caixinha
          </SideNavLink>
        </Button>

        <Button
          disabled={status === 'unauthenticated'}
          className="hover:no-underline p-0  justify-start"
          variant={'link'}
        >
          <SideNavLink
            icon={<Blocks size={14} className="mr-2 max-md:m-0" />}
            href="/pages/categorias"
            currentPath={pathname}
          >
            Categoria
          </SideNavLink>
        </Button>
      </SideNavContent>
      <SideNavFooter>
        <span className="text-xs text-muted-foreground">
          Feito com 💙 por{' '}
          <Link
            className="text-blue-500"
            target="_blank"
            href={'https://www.instagram.com/kaesyo_?igsh=cDFtZmU4YmJqbzg0'}
          >
            @kaesyo_
          </Link>
        </span>
      </SideNavFooter>
    </SideNav>
  )
}
