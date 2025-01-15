import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const tableProps = cva('table', {
  variants: {
    size: {
      xs: 'table-xs',
      sm: 'table-sm',
      md: 'table-md',
      lg: 'table-lg',
    },
    zebra: {
      true: 'table-zebra',
      false: '',
    },
    pinRows: {
      true: 'table-pin-rows',
      false: '',
    },
    pinCols: {
      true: 'table-pin-cols',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    zebra: false,
    pinRows: false,
    pinCols: false,
  },
});

export type tableBase = VariantProps<typeof tableProps>
interface tableProps extends tableBase, Omit<React.ComponentPropsWithRef<'table'>, keyof tableBase>{}

export const Table = ( { zebra, pinRows, pinCols, size, className, ...props }: tableProps ) => {
  return (<div className="overflow-x-auto">
    <table {...props} className={cn(tableProps({ pinCols, pinRows, zebra, size }), className)} />
  </div>)
}

export * from './block'
export * from './row'
export * from './cell'
