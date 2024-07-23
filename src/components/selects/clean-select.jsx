import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../primitive/select'
import { Icons } from '../icons'

export const CleanSelect = ({ options, hexadecimalColor = '#1D4ED8' }) => {
  return (
    <Select>
      <SelectTrigger
        style={{
          color: hexadecimalColor,
        }}
        className={
          'w-[140px] font-medium border-none outline-none ring-0 ring-offset-0 group'
        }
      >
        <SelectValue placeholder="Publish Space" />
        <Icons.arrowDown
          style={{
            color: hexadecimalColor,
          }}
          className="group-data-[state=open]:rotate-180 transition-all duration-200"
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            className="border-none outline-none ring-0 ring-offset-0 shadow-none cursor-pointer"
            key={option.value}
            style={{
              color: hexadecimalColor,
            }}
            value="light"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
