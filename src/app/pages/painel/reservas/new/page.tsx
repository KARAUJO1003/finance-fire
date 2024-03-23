import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { FormPiggyBank } from '../_components/FormPiggyBank'

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <div className="max-w-3/4">
      <FormPiggyBank urlPage="reservas" />
    </div>
  )
}
