import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const badgeProps = cva('badge', {
  variants: {
    variant: {
      outline: 'badge-outline',
      default: ''
    },
    status: {
      none: '',
      info: 'badge-info',
      success: 'badge-success',
      warning: 'badge-warning',
      error: 'badge-error',
    },
    ghost: {
      true: 'badge-ghost',
      false: ''
    },
    color: {
      neutral: 'badge-neutral',
      primary: 'badge-primary',
      secondary: 'badge-secondary',
      accent: 'badge-accent',
    },
    size: {
      default: 'h-auto',
      lg: 'badge-lg',
      md: 'badge-md',
      sm: 'badge-sm',
      xs: 'badge-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
    status: 'none',
    ghost: false,
    color: 'primary',
    size: 'default',
  },
});

export type badgeBase = VariantProps<typeof badgeProps>
interface badgeProps extends badgeBase, Omit<React.ComponentPropsWithRef<'div'>, keyof badgeBase>{}

export const Badge = ( { color, variant, size, ghost, status, className, ...props }: badgeProps ) => {
  return <div {...props} className={cn(badgeProps({ color, variant, ghost, size, status }), className)} />
}
