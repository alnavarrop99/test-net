import { cva, type VariantProps } from "class-variance-authority";
import { useRef } from "react";
import { cn } from "~/lib";

export const checkProps = cva('checkbox', {
  variants: {
    size: {
      lg: 'checkbox-lg',
      md: 'checkbox-md',
      sm: 'checkbox-sm',
      xs: 'checkbox-xs',
    },
    status: {
      none: '',
      success: 'checkbox-success',
      warning: 'checkbox-warning',
      info: 'checkbox-info',
      error: 'checkbox-error',
    },
    color: {
      primary: 'checkbox-primary',
      secondary: 'checkbox-secondary',
      accent: 'checkbox-accent',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    status: 'none'
  },
})

export type checkBase = VariantProps<typeof checkProps> & {
  indeterminate?: boolean
}
interface checkProps extends checkBase, Omit<React.ComponentPropsWithRef<'input'>, keyof checkBase | 'type'>{}

export const Check = ( { color, size, indeterminate, status, className, ref: refNode, ...props }: checkProps ) => {
  const ref = useRef<React.ComponentRef<'input'>>(null)

  if(ref?.current && indeterminate) ref.current.indeterminate = indeterminate
  const refCall: React.RefCallback<React.ComponentRef<'input'>> = (node) => {
    if(refNode && typeof refNode === 'function') refNode?.(ref.current = node)
    else if(refNode) refNode.current = ref.current = node
  }

  return <input {...props} ref={refCall} type="checkbox" className={cn(checkProps({ color, size, status }), className)} />
}
