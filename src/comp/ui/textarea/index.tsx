import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const textareaProps = cva('textarea', {
  variants: {
    size: {
      lg: 'textarea-lg',
      md: 'textarea-md',
      sm: 'textarea-sm',
      xs: 'textarea-xs',
    },
    noBordered: {
      true: '',
      false: 'textarea-bordered'
    },
    status: {
      none: '',
      success: 'textarea-success',
      warning: 'textarea-warning',
      info: 'textarea-info',
      error: 'textarea-error',
    },
    color: {
      primary: 'textarea-primary',
      secondary: 'textarea-secondary',
      accent: 'textarea-accent',
    },
    ghost: {
      false: '',
      true: 'textarea-ghost',
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    status: 'none',
    ghost: false
  },
})

export type textareaBase = VariantProps<typeof textareaProps> & {}
interface textareaProps extends textareaBase, Omit<React.ComponentPropsWithRef<'textarea'>, keyof textareaBase>{}

export const Textarea = ( { color, noBordered = false, ghost: effect, size, className, ref: refNode, ...props }: textareaProps ) => {
  return <textarea {...props} className={cn(textareaProps({ color, noBordered, ghost: effect, size }), className)} />
}
