import React from 'react'
import { DataTableDemo } from '@/app/_components/DataTableDemo'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Details() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }
  return (
    <div>
      <DataTableDemo />
    </div>
  )
}
