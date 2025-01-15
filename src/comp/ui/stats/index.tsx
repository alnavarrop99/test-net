import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const statsProps = cva('stats shadow', {
  variants: {
    orientation: {
      horizontal: 'stats-horizontal',
      vertical: 'stats-vertical',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export type statsBase = VariantProps<typeof statsProps>
interface statsProps extends statsBase, Omit<React.ComponentPropsWithRef<'div'>, keyof statsBase>{}

export const Stats = ( { orientation, className, ...props }: statsProps ) => {
  return <div {...props} className={cn(statsProps({ orientation }), className)} />
}

const itemProps = cva('stat')
export const StatsItem = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(itemProps(), className)} />
}

const titleProps = cva('stat-title')
export const StatsTitle = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(titleProps(), className)} />
}

const valueProps = cva('stat-value')
export const StatsValue = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(valueProps(), className)} />
}

const actionProps = cva('stat-actions')
export const StatsAction = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(actionProps(), className)} />
}

const descProps = cva('stat-desc')
export const StatsDesc = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(descProps(), className)} />
}

const itemFigure = cva('stat-figure')
export const StatsFigure = ( { className, ...props }: React.ComponentPropsWithRef<'figure'> ) => {
  return <figure {...props} className={cn(itemFigure(), className)} />
}

