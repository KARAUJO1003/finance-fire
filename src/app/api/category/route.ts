/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Category } from '@prisma/client'

export async function GET(req: Request, res: Response) {
  try {
    const response = await prisma.category.findMany()
    return NextResponse.json(response, { status: 200 })
  } catch (error) {}
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ message: 'Não autorizado' }, { status: 401 })
  }

  const { name, color, type, userId }: Category = await req.json()

  try {
    await prisma.category.create({
      data: {
        name,
        color,
        type,
        userId,
      },
    })

    return NextResponse.json(
      { message: 'Cadastro realizado com sucesso' },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ message: 'Error ao cadastrar' }, { status: 400 })
  }
}
export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ message: 'Não autorizado' }, { status: 401 })
  }
  const { id }: Category = await req.json()

  try {
    await prisma.category.delete({
      where: {
        id,
      },
    })
    return NextResponse.json(
      { message: 'Deletado com sucesso' },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ message: 'Error ao deletar' }, { status: 400 })
  }
}
