import { cva, type VariantProps } from "class-variance-authority";
import { groupIdCtx } from "../pagination";
import { useId } from "react";
import { cn } from "~/lib";

export const rateProps = cva('rating', {
  variants: {
    size: {
      lg: 'rating-lg',
      md: 'rating-md',
      sm: 'rating-sm',
      xs: 'rating-xs',
    },
    half: {
      true: 'rating-half',
      false: ''
    }
  },
  defaultVariants: {
    size: 'md'
  },
});

export type rateBase = VariantProps<typeof rateProps>
interface rateProps extends rateBase, Omit<React.ComponentPropsWithRef<'div'>, keyof rateBase>{}

export const Rate = ( { size, half, className, ...props }: rateProps ) => {
  return (<groupIdCtx.Provider value={useId()}>
    <div {...props} className={cn(rateProps({ size, half }), className)} />
  </groupIdCtx.Provider>)
}

export const itemProps = cva('mask', {
  variants: {
    hidden: {
      true: 'rating-hidden',
      false: ''
    },
    half: {
      1: 'mask-half-1',
      2: 'mask-half-2',
    }
  },
  defaultVariants: { 
  },
});

type itemBase = VariantProps<typeof itemProps>
interface itemProps extends itemBase, Omit<React.ComponentPropsWithRef<'input'>, keyof itemBase | 'type'>{}

const RateItem = ( { hidden, half, className, ...props }: itemProps ) => {
  return (<groupIdCtx.Consumer>
    { (id) => <input {...props} type="radio" name={id} className={cn(itemProps({ hidden: hidden, half }), className)} /> }
  </groupIdCtx.Consumer>
  )
}

export const RateStar1: typeof RateItem = ( { className, ...props } ) => {
  return <RateItem {...props} className={cn('mask-star', className)} />
}

export const RateStar2: typeof RateItem = ( { className, ...props } ) => {
  return <RateItem {...props} className={cn('mask-star-2', className)} />
}

export const RateHeart: typeof RateItem = ( { className, ...props } ) => {
  return <RateItem {...props} className={cn('mask-heart', className)} />
}
