import React from 'react'
import { cn } from '../../utils/cn'

export const Wrapper = ({ className, children, size = 'lg' }) => {
  return (
    <div
      className={cn(
        'max-w-[1920px] px-5 max-sm:px-3 mx-auto py-5',
        size === 'sm' && 'max-w-[900px]',
        className,
      )}
    >
      {children}
    </div>
  )
}
