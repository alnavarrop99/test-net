import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const radioProps = cva('radio', {
  variants: {
    size: {
      lg: 'radio-lg',
      md: 'radio-md',
      sm: 'radio-sm',
      xs: 'radio-xs',
    },
    status: {
      none: '',
      success: 'radio-success',
      warning: 'radio-warning',
      info: 'radio-info',
      error: 'radio-error',
    },
    color: {
      neutral: 'radio-neutral',
      primary: 'radio-primary',
      secondary: 'radio-secondary',
      accent: 'radio-accent',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    status: 'none'
  },
})

export type radioBase = VariantProps<typeof radioProps> & { }
interface radioProps extends radioBase, Omit<React.ComponentPropsWithRef<'input'>, keyof radioBase | 'type'>{}

export const Radio = ( { color, size, status, className, ...props }: radioProps ) => {
  return <input {...props} type="radio" className={cn(radioProps({ color, size, status }), className)} />
}
