'use client'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'
import { cn } from '@/lib/utils'
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

type DeleteButtomProps = {
  classNames?: string
  id: string
}

export const DeleteButtom = ({ classNames, id }: DeleteButtomProps) => {
  const router = useRouter()

  async function handleDelete() {
    try {
      await api.delete(`/api/piggybank/`, { data: { id } })
      toast.success('Deletado com sucesso!')
      router.refresh()
    } catch (error) {
      toast.error('Não Deletado')
    }
  }

  return (
    <Button
      onClick={handleDelete}
      variant={'link'}
      size={'default'}
      className={cn(
        [
          'flex items-center gap-2 w-full justify-start p-0 h-fit leading-none hover:no-underline hover:text-red-500',
        ],
        classNames,
      )}
    >
      <Trash size={12} />
      Excluir
    </Button>
  )
}
