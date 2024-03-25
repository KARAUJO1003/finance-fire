import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'
import createItemAction from '../../actions/actions-fomr'
import prisma from '@/lib/prisma'
import { FormeNewItem } from '../../_components/FormeNewItem'

export default async function page() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect('/')
  }

  const categories = await prisma.category.findMany({
    where: { type: 'ENTRADA' },
  })

  return (
    <div className="max-w-3/4">
      <FormeNewItem
        handleSubmit={createItemAction.createIncome}
        categories={categories}
      />
    </div>
  )
}
