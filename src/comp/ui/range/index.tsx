import { cva, type VariantProps } from "class-variance-authority";
import { createContext } from "react";
import { cn } from "~/lib";

export const rangeProps = cva('range', {
  variants: {
    status: {
      none: '',
      info: 'range-info',
      success: 'range-success',
      warning: 'range-warning',
      error: 'range-error',
    },
    color: {
      neutral: 'range-neutral',
      primary: 'range-primary',
      secondary: 'range-secondary',
      accent: 'range-accent',
    },
    size: {
      lg: 'range-lg',
      md: 'range-md',
      sm: 'range-sm',
      xs: 'range-xs',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
    status: 'none',
  },
});

export type rangeBase = VariantProps<typeof rangeProps> & {
  position?: "top" | "bottom"
  measure?: boolean
}
type rangeGeneric = Omit<React.ComponentPropsWithRef<'input'>, keyof rangeBase | 'type' | 'min' | 'max'> & Required<Pick<React.ComponentPropsWithRef<'input'>, 'max' | 'min'>>
interface rangeProps extends rangeBase, rangeGeneric {}

const propsCtx = createContext<{ step: number, max: number } & Pick<rangeBase, 'position'>>({ step: 0, max: 0 })
export const Range = ( { color, size, position = 'bottom', status, measure, className, ...props }: rangeProps ) => {
  const step = props.step
  const max = props.max
  const range = <input {...props} type="range" className={cn(rangeProps({ color, size, status }), className)} />

  if(measure && step && !Number.isNaN(+step) && !Number.isNaN(+max)){
    return (<propsCtx.Provider value={{ step: +step, max: +max, position: position }}>
      <div>
        {position === 'top' && <Measure />}
        {range}
        {position === 'bottom' && <Measure />}
      </div>
    </propsCtx.Provider>)
  }

  return range
}

const measureProps = cva("flex w-full justify-between px-2 text-xs")
export const Measure = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return (<propsCtx.Consumer>
    {({ step, max }) => (<div {...props} className={cn(measureProps(), className)}>
      {Array.from({ length: max / step + 1 }).map( (_, i) => <span key={i} className="font-bold">|</span> )}
    </div>
    )}
  </propsCtx.Consumer>)
}
