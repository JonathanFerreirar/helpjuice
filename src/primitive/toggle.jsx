import React from 'react'

export const Toggle = ({ children }) => {
  return (
    <div className="bg-green-100 px-2 pb-1 rounded-sm flex items-center justify-center cursor-pointer">
      <span className="font-semibold text-green-600">{children}</span>
    </div>
  )
}
