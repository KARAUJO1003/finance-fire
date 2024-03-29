import { LoaderIcon } from 'lucide-react'
import React from 'react'

export default function loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoaderIcon className="animate-spin" />
    </div>
  )
}
