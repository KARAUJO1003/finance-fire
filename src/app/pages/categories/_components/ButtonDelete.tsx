'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

type ButtomDeleteProps = {
  categoryID: string
}

export const ButtonDelete = (categoryID: ButtomDeleteProps) => {
  const router = useRouter()
  async function handleDeleteCategory(categoryID: string) {
    try {
      await api.delete('/api/category', {
        data: {
          id: categoryID,
        },
      })
      router.refresh()
      toast('Item deletado com sucesso')
    } catch (error) {
      toast('Erro ao deletar')
    }
  }
  return (
    <Button
      onClick={() => handleDeleteCategory(categoryID.categoryID)}
      size={'icon'}
      variant={'outline'}
    >
      <Trash size={14} />
    </Button>
  )
}
