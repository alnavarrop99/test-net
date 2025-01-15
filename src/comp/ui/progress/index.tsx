import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const progressProps = cva('progress', {
  variants: {
    status: {
      none: "",
      info: 'progress-info',
      success: 'progress-success',
      warning: 'progress-warning',
      error: 'progress-error',
    },
    color: {
      primary: 'progress-primary',
      neutral: 'progress-neutral',
      secondary: 'progress-secondary',
      accent: 'progress-accent',
    },
  },
  defaultVariants: {
    status: 'none',
    color: 'primary'
  },
});

export type progressBase = VariantProps<typeof progressProps>
type progressGeneric = Omit<React.ComponentPropsWithRef<'progress'>, keyof progressBase | 'max' | 'value'> & Required<Pick<React.ComponentPropsWithRef<'progress'>, 'max' | 'value'>>
export interface progressProps extends progressBase, progressGeneric { }

export const Progress = ( { color, status, className, ...props }: progressProps ) => {
  return <progress {...props} className={cn(progressProps({ color, status }), className)} />
}
