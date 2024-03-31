'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { api } from '@/lib/api'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  color: z.string(),
  type: z.string(),
})

type NewCatergoyFormProps = {
  classNames?: string
  type?: 'ENTRADA' | 'SAIDA' | 'META'
  variant:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined
}

export const NewCatergoyForm = ({
  classNames,
  variant,
  type,
}: NewCatergoyFormProps) => {
  const { data } = useSession()
  const router = useRouter()
  const [openSheet, setOpenSheet] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      color: '',
      type,
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await api.post('/api/category', {
      name: values.name,
      color: values.color,
      type: values.type,
      userId: data?.user.id,
    })
    router.refresh()

    setOpenSheet(!openSheet)
    // setOpenSheet(!openSheet)
  }

  return (
    <div>
      <Sheet onOpenChange={() => setOpenSheet(!openSheet)} open={openSheet}>
        <SheetTrigger asChild>
          <Button
            className={cn(['gap-2'], classNames)}
            variant={variant}
            size={'sm'}
          >
            <Plus size={14} />
            Nova categoria
          </Button>
        </SheetTrigger>
        <SheetContent
          className="max-sm:w-full"
          onInteractOutside={(e) => {
            e.preventDefault()
          }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <h2 className="font-semibold text-lg">
                Cadastre uma nova categoria
              </h2>

              <div className="flex items-center gap-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="name">Nome</FormLabel>
                      <FormControl>
                        <Input
                          className="w-full"
                          placeholder="Descreva o nome para sua categoria..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="color">Cor</FormLabel>
                      <FormControl>
                        <Input
                          type="color"
                          className="w-12"
                          placeholder="Escolha uma cor..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="type">Tipo</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={form.getValues('type')}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Associe a um tipo..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ENTRADA">Entrada</SelectItem>
                          <SelectItem value="SAIDA">Saida</SelectItem>
                          <SelectItem value="META">Meta</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Cadastrar</Button>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </div>
  )
}
