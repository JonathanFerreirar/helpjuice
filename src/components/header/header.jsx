import React from 'react'
import { Button } from '../../primitive/button'
import { cn } from '../../utils/cn'
import { Icons } from '../icons'
import { CleanSelect } from '../selects/clean-select'
import { Separator } from '../../primitive/separator'

const FAKE_CURRENT_PATH = 'Main'

const HEADER_OPTIONS = [
  'Main',
  'Getting started',
  'Front-end developer test project',
]

const HEADER_LENGTH = HEADER_OPTIONS.length - 1

const HEADER_SELECT_OPTIONS = [
  {
    label: 'Example option',
    value: 'option',
  },
]

export const Header = () => {
  return (
    <header
      data-testid="header_container"
      className="flex items-center justify-between"
    >
      <ul className="flex items-center gap-2">
        <Icons.book className="text-gray-500" size={18} />
        <div className="flex items-center">
          {HEADER_OPTIONS.map((header, index) => (
            <React.Fragment key={header}>
              <li
                className={cn(
                  'text-gray-500 relative max-w-[220px] truncate cursor-pointer',
                  FAKE_CURRENT_PATH === header && 'underline',
                )}
              >
                {header}
              </li>
              <Separator
                className={cn(
                  index !== HEADER_LENGTH &&
                    'w-5 h-px bg-gray-500 rotate-[-75deg]  mx-2',
                )}
              />
            </React.Fragment>
          ))}
        </div>
      </ul>
      <ul className="flex items-center gap-5">
        <Button className="flex items-center gap-2">
          <Icons.unlock /> Editing
        </Button>
        <Separator />

        <CleanSelect options={HEADER_SELECT_OPTIONS} />
      </ul>
    </header>
  )
}
