import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { FormIncomes } from './_components/FormIncomes'

export default async function Ganhos() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <div>
      <FormIncomes />
    </div>
  )
}
