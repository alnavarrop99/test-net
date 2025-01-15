import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const inputProps = cva('input', {
  variants: {
    size: {
      lg: 'input-lg',
      md: 'input-md',
      sm: 'input-sm',
      xs: 'input-xs',
    },
    noBordered: {
      true: '',
      false: 'input-bordered'
    },
    status: {
      none: '',
      success: 'input-success',
      warning: 'input-warning',
      info: 'input-info',
      error: 'input-error',
    },
    color: {
      primary: 'input-primary',
      secondary: 'input-secondary',
      accent: 'input-accent',
    },
    ghost: {
      false: '',
      true: 'input-ghost',
    }
  },
  defaultVariants: {
    noBordered: false,
    size: 'md',
    color: 'primary',
    status: 'none',
    ghost: false,
  },
})

export type inputBase = VariantProps<typeof inputProps> & { 
  type?: Exclude<React.ComponentPropsWithRef<'input'>['type'], 'radio' | 'image' | 'color' | 'button' | 'checkbox' | 'file' | 'hidden' | 'range' | 'reset' | 'submit'>
  headless?: boolean
}
interface inputProps extends inputBase, Omit<React.ComponentPropsWithRef<'input'>, keyof inputBase>{}

export const Input = ( { color, status, noBordered, ghost, size, className, headless, type, ...props }: inputProps ) => {
  return <input {...props} type={type} className={cn({ [ inputProps({ color, status, noBordered, ghost, size }) ]: !headless }, className)} />
}
