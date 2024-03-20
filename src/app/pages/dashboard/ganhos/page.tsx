import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Ganhos() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return <div>Ganhos</div>
}
