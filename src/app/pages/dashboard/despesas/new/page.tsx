import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { FormExpenses } from '../_components/FormExpenses'

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <div className="max-w-3/4">
      <FormExpenses urlPage="despesas" />
    </div>
  )
}
