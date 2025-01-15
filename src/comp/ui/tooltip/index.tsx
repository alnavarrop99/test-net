import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const tooltipProps = cva('tooltip', {
  variants: {
    position: {
      top: 'tooltip-top',
      bottom: 'tooltip-bottom',
      left: 'tooltip-left',
      right: 'tooltip-right',
    },
    status: {
      none: "",
      info: 'tooltip-info',
      success: 'tooltip-success',
      warning: 'tooltip-warning',
      error: 'tooltip-error',

    },
    color: {
      neutral: 'tooltip-neutral',
      primary: 'tooltip-primary',
      secondary: 'tooltip-secondary',
      accent: 'tooltip-accent',
    },
    open: {
      true: 'tooltip-open',
      false: ''
    },
  },
  defaultVariants: {
    position: 'top',
  },
})

export type tooltipBase = VariantProps<typeof tooltipProps> & {
  label: string
}
interface tooltipProps extends tooltipBase, Omit<React.ComponentPropsWithRef<'div'>, keyof tooltipBase>{}

export const Tooltip = ( { color, open, position, status, className, label, ...props }: tooltipProps ) => {
  return <div {...props} data-tip={label} className={cn(tooltipProps({ color, open, position, status }), className)} />
}
