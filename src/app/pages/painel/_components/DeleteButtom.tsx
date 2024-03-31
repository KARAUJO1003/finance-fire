'use client'

import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import { cn } from '@/lib/utils'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

type DeleteButtomProps = {
  classNames?: string
  id: string
  routeName: 'piggybank' | 'incomes' | 'expenses' | 'goals'
}

export const DeleteButtom = ({
  classNames,
  id,
  routeName,
}: DeleteButtomProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleDelete() {
    try {
      setIsLoading(true)
      await api.delete(`/api/${routeName}`, { data: { id } })
      toast.success('Deletado com sucesso!')
      setIsLoading(false)
      router.refresh()
    } catch (error) {
      toast.error('Não Deletado')
    }
  }

  return (
    <Button
      onClick={handleDelete}
      disabled={isLoading}
      variant={'link'}
      size={'default'}
      className={cn(
        [
          'flex items-center gap-2 w-full justify-start px-2 leading-none hover:no-underline hover:text-red-500',
        ],
        classNames,
      )}
    >
      <Trash size={12} />
      Excluir
    </Button>
  )
}
