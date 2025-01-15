import { cx } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/types'
import { twMerge } from 'tailwind-merge'

export const cn = ( ...list: Array<ClassValue> ) => {
  return twMerge(cx(...list))
}
