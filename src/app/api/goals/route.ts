import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request) {
  const { id } = await request.json()
  try {
    const item = await prisma.goal.delete({
      where: {
        id,
      },
    })
    return NextResponse.json(
      { message: 'Deletado com sucesso', item },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao deletar item', error },
      { status: 401 },
    )
  }
}
