import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { FormGoals } from '../_components/FormGoals'

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <div className="max-w-3/4">
      <FormGoals urlPage="metas" />
    </div>
  )
}
