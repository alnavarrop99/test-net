import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const dividerProps = cva('divider', {
  variants: {
    status: {
      none: '',
      info: 'divider-info',
      success: 'divider-success',
      warning: 'divider-warning',
      error: 'divider-error',
    },
    color: {
      neutral: 'divider-neutral',
      primary: 'divider-primary',
      secondary: 'divider-secondary',
      accent: 'divider-accent',
    },
    orientation: {
      horizontal: 'divider-horizontal',
      vertical: 'divider-vertical',
    },
  },
  defaultVariants: {
    color: 'primary',
    status: "none",
    orientation: 'horizontal'
  },
})

export type dividerBase = VariantProps<typeof dividerProps>
interface dividerProps extends dividerBase, Omit<React.ComponentPropsWithRef<'div'>, keyof dividerBase>{}

export const Divider = ( { color, orientation, status, className, ...props }: dividerProps ) => {
  return <div {...props} className={cn(dividerProps({ color, orientation, status }), className)} />
}

const itemProps = cva('divider', {
  variants: {
    align: {
      start: 'divider-start',
      center: '',
      end: 'divider-end',
    },
  },
  defaultVariants: {
    align: 'center'
  },
});

export const DividerItem = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(itemProps(), className)} />
}
