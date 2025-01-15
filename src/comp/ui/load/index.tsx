import { cva, type VariantProps } from "class-variance-authority";
import { Progress } from "../progress";
import { cn } from "~/lib";

export const loadingProps = cva('loading', {
  variants: {
    status: {
      none: '',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
      info: 'text-info',
    },
    ghost: {
      true: 'text-ghost',
      false: ''
    },
    color: {
      neutral: 'text-neutral',
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
    },
    layout: {
      default: '',
      wide: 'loading-wide',
      block: 'loading-block',
      circle: 'loading-circle',
      square: 'loading-square',
    },
    size: {
      lg: 'loading-lg',
      md: 'loading-md',
      sm: 'loading-sm',
      xs: 'loading-xs',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    layout: 'default',
    status: 'none',
    ghost: false,
  },
});

export type loadingBase = VariantProps<typeof loadingProps>
interface loadingProps extends loadingBase, Omit<React.ComponentPropsWithRef<'span'>, keyof loadingBase>{}

const Loading = ( { color, size, status, layout, ghost, className, ...props }: loadingProps ) => {
  return <span {...props} className={cn(loadingProps({ color, size, status, layout, ghost }), className)} />
}

export const Spinner: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cn('loading-spinner', className)} />
}

export const Dots: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cn('loading-dots', className)} />
}

export const Ring: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cn('loading-rings', className)} />
}

export const Ball: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cn('loading-ball', className)} />
}

export const Bars: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cn('loading-bars', className)} />
}

export const Infy: typeof Loading = ( { className, ...props } ) => {
  return <Loading {...props} className={cn('loading-infinity', className)} />
}

export const Progressive = ( { className, ...props }: Partial<Omit<React.ComponentPropsWithRef<typeof Progress>, 'max'|'value'>> ) => {
  // @ts-ignore
  return <Progress {...props} className={cn('rounded-none', className)} />
}
