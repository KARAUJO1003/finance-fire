import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PageHomeComponent } from './_components/PageHomeComponent'
import { ButtonLogin } from './_components/ButtonLogin'

export default function Home() {
  return (
    <main className="h-screen w-full px-10 py-5 flex flex-col">
      <div className="w-full flex justify-end gap-3 max-md:hidden">
        <Button variant={'secondary'}>
          <Link href={'pages/dashboard'}>Dashboard</Link>
        </Button>
        <ButtonLogin />
      </div>
      <PageHomeComponent />
    </main>
  )
}
