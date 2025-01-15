import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const indicatorProps = cva('indicator', {
  variants: {
    justify: {
      start: 'indicator-start',
      center: 'indicator-center',
      end: 'indicator-end',
    },
    align: {
      top: 'indicator-top',
      middle: 'indicator-middle',
      bottom: 'indicator-bottom',
    }
  },
  defaultVariants: { },
});

export type indicatorBase = VariantProps<typeof indicatorProps>
interface indicatorProps extends indicatorBase, Omit<React.ComponentPropsWithRef<'div'>, keyof indicatorBase>{}

export const Indicator = ( { align, justify, className, ...props }: indicatorProps ) => {
  return <div {...props} className={cn(indicatorProps({ align, justify }), className)} />
}

const itemProps = cva('indicator-item z-[0]')
export const IndicatorItem = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(itemProps(), className)} />
}
