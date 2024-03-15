import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen w-full px-10 py-5 flex items-start justify-center">
      <Button>
        {' '}
        <Link href={'pages/dashboard'}>Dashboard</Link>{' '}
      </Button>
    </main>
  )
}
