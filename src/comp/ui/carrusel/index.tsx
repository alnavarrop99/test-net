import { cva, type VariantProps } from "class-variance-authority";
import { createContext } from "react";
import { type buttonBase, buttonProps } from "../button";
import { cn } from "~/lib";

export const carruselProps = cva('carousel', {
  variants: {
    box: {
      true: 'rounded-box',
      false: ''
    },
    slide: {
      true: 'absolute',
      false: ''
    },
    full: {
      true: 'w-full',
      false: '',
    },
    snap: {
      start: 'carousel-start',
      center: 'carousel-center',
      end: 'carousel-end',
    },
    orientation: {
      horizontal: '',
      vertical: 'carousel-vertical',
    },
  },
  defaultVariants: {
    box: false,
    slide: false,
    full: false,
    snap: 'start',
    orientation: 'horizontal',
  },
});

export type carrulserBase = VariantProps<typeof carruselProps>
interface carruselProps extends carrulserBase, Omit<React.ComponentPropsWithRef<'div'>, keyof carrulserBase>{}

const propsCtx = createContext<{ full?: boolean, slide?: boolean }>({})

export const Carrusel = ( { snap, orientation, full, slide, box,  className, ...props }: carruselProps ) => {
  return (<propsCtx.Provider value={{ full: !!full, slide: !!slide }}>
    <div {...props} className={cn(carruselProps({ box, snap, orientation, full }), className)} />
  </propsCtx.Provider>)
}

type carruselItemBase = {
  itemId: string
}
interface carruselItemProps extends carruselItemBase, Omit<React.ComponentPropsWithRef<'div'>, keyof carruselItemBase | 'id'> {}

const itemProps = cva('carousel-item')
export const CarruselItem = ({ className, itemId, ...props }: carruselItemProps) => {
  return (<propsCtx.Consumer>
    {({ full, slide }) => <div {...props} id={itemId} className={cn({'[&>*]:w-full': full, 'relative': slide}, itemProps(), className )} />}
  </propsCtx.Consumer>);
};


const menuProps = cva("flex w-full justify-center gap-2 py-2")
export const CarruselMenu = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={cn(menuProps(), className)} />
}

const slideProps = cva("absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between")
export const CarruselSlide = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => {
  return (<propsCtx.Consumer>
    {({ slide }) => slide && <div {...props} className={cn(slideProps(), className)} />}
  
  </propsCtx.Consumer>);
}

type itemBase = buttonBase & {
  itemId: string 
}

interface itemProps extends itemBase, Omit<React.ComponentPropsWithRef<'a'>, keyof itemBase | 'href'> {}

export const CarruselMenuItem = ({ size = 'xs', color, status, variant, active, disabled, noAnimation, ghost, glass, layout, itemId, className, ...props }: itemProps ) => {
  return <a {...props} href={`#${itemId}`} className={cn(buttonProps({ size, color, status, variant, active, disabled, noAnimation, ghost, glass, layout, }), className)} />
}
