import React from 'react'
import { Wrapper } from '../wrapper/wrapper'

const HEADER_OPTIONS = [
  'Main',
  'Getting started',
  'Front-end developer test project',
]

const HEADER_ACTIONS_OPTIONS = [
  {
    label: 'Editing',
  },
  {
    label: 'Publish Space',
  },
]

export const Header = () => {
  return (
    <Wrapper>
      <header className="flex items-center justify-between">
        <ul className="flex items-center gap-2">
          {HEADER_OPTIONS.map((header) => (
            <li key={header}>{header}</li>
          ))}
        </ul>
      </header>
    </Wrapper>
  )
}
