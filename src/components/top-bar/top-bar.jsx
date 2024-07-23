import React from 'react'
import { Toggle } from '../../primitive/toggle'
import { Separator } from '../../primitive/separator'

import { Icons } from '../icons'
import { Avatar } from '../../primitive/avatar'

export const TopBar = () => {
  return (
    <div className="w-full flex items-center py-2 px-2 justify-between border border-gray-200 shadow-sm rounded-lg">
      <div className="flex items-center gap-4">
        <Toggle>p</Toggle>
        <Separator className="h-3" />
        <div className="flex items-center gap-2 text-gray-500">
          <Icons.clock />
          <span>0min</span>
        </div>
        <Separator className="h-3" />
        <Avatar src="/rabbit.png" alt="user img" />
        <Separator className="h-3" />
        <div className="flex items-center gap-2">
          <Icons.bigArrowDown className="text-gray-500 rotate-45" />
          <span className="text-gray-500">0</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Icons.checked className="text-gray-500 cursor-pointer" />
        <Icons.cloud className="text-green-800 cursor-pointer" />
        <Icons.vertiacalDots className="text-black cursor-pointer" />
      </div>
    </div>
  )
}
