import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const buttonProps = cva('btn', {
  variants: {
    status: {
      none: '',
      info: 'btn-info',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
    },
    color: {
      neutral: 'btn-neutral',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
    },
    variant: {
      default: '',
      link: 'btn-link',
      outline: 'btn-outline',
    },
    active: {
      true: 'btn-active',
      false: ''
    },
    disabled: {
      true: 'btn-disabled',
      false: '',
    },
    noAnimation: {
      true: 'no-animation',
      false: ''
    },
    ghost: {
      true: 'btn-ghost',
      false: ''
    },
    glass: {
      true: 'glass',
      false: ''
    },
    layout: {
      default: '',
      wide: 'btn-wide',
      block: 'btn-block',
      circle: 'btn-circle',
      square: 'btn-square',
    },
    size: {
      default: 'h-auto',
      lg: 'btn-lg',
      md: 'btn-md',
      sm: 'btn-sm',
      xs: 'btn-xs',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'primary',
    status: 'none',
    variant: 'default',
    active: false,
    disabled: false,
    noAnimation: false,
    ghost: false,
    glass: false,
    layout: 'default',
  },
});

export type buttonBase = VariantProps<typeof buttonProps>
interface buttonProps extends buttonBase, Omit<React.ComponentPropsWithRef<'button'>, keyof buttonBase>{}

export const Button = ( { size, color, status, variant, active, disabled, noAnimation, ghost, glass, layout, className, ...props }: buttonProps ) => {
  return <button {...props} className={cn(buttonProps({ size, color, status, variant, active, disabled, noAnimation, ghost, glass, layout }), className)} />
}
