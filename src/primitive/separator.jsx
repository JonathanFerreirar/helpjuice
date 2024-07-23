import React from 'react'
import { cn } from '../utils/cn'

export const Separator = ({ className }) => {
  return (
    <div
      className={cn('bg-gray-300 rotate-180 h-6 w-[2px]', className)}
      aria-hidden
    />
  )
}
