import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const alertProps = cva('alert', {
  variants: {
    status: {
      none: '',
      info: 'alert-info',
      success: 'alert-success',
      warning: 'alert-warning',
      error: 'alert-error',
    },
  },
  defaultVariants: {
    status: 'none'
  },
})

export type alertBase = VariantProps<typeof alertProps>
interface alertProps extends alertBase, Omit<React.ComponentPropsWithRef<'div'>, keyof alertBase>{}

export const Alert = ( { status, className, ...props }: alertProps ) => {
  return <div {...props} role="alert" className={cn(alertProps({ status }), className)} />
}
