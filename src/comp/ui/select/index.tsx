import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const selectProps = cva('select', {
  variants: {
    size: {
      lg: 'select-lg',
      md: 'select-md',
      sm: 'select-sm',
      xs: 'select-xs',
    },
    noBordered: {
      true: '',
      false: 'select-bordered'
    },
    status: {
      none: '',
      success: 'select-success',
      warning: 'select-warning',
      info: 'select-info',
      error: 'select-error',
    },
    color: {
      neutral: 'select-neutral',
      primary: 'select-primary',
      secondary: 'select-secondary',
      accent: 'select-accent',
    },
    ghost: {
      false: '',
      true: 'select-ghost',
    }
  },
  defaultVariants: {
    noBordered: false,
    size: 'md',
    color: 'primary',
    ghost: false,
  },
})

export type selectBase = VariantProps<typeof selectProps> & {
  headless?: boolean
}
interface selectProps extends selectBase, Omit<React.ComponentPropsWithRef<'select'>, keyof selectBase>{}

export const Select = ( { color, noBordered, headless, ghost, status, size, className, ref: refNode, ...props }: selectProps ) => {
  return <select {...props} className={cn({ [ selectProps({ color, noBordered, ghost, status, size }) ]: !headless }, className)} />
}

export const SelectItem = ( props: React.ComponentPropsWithRef<'option'> ) => {
  return <option {...props} />
}

