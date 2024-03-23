import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { CategoryCard } from './_components/CategoryCard'
import { NewCatergoyForm } from './_components/NewCatergoyForm'

export default async function Categories() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <div className="space-y-4">
      <NewCatergoyForm variant={'default'} />
      <CategoryCard />
    </div>
  )
}
