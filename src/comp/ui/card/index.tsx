import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib';

// Definir las clases con cva
const cardProps = cva('card bg-base-100 shadow-xl', {
  variants: {
    glass: {
      false: '',
      true: 'glass'
    },
    bordered: {
      true: 'card-bordered',
      false: '',
    },
    padding: {
      normal: 'card-normal',
      compact: 'card-compact',
    },
    layout: {
      default: '',
      side: 'card-side',
      full: 'image-full',
    },
  },
  defaultVariants: {
    glass: false,
    bordered: false,
    padding: 'normal',
    layout: 'default',
  },
});

export type cardBase = VariantProps<typeof cardProps>
interface cardProps extends cardBase, Omit<React.ComponentPropsWithRef<'div'>, keyof cardBase>{}

export const Card = ({ bordered, padding, layout, glass, className, ...props }: cardProps) => {
  return  <div {...props} className={cn(cardProps({ bordered, padding, layout, glass }), className)} />
};

const titleProps = cva('card-title');
export const CardTitle = ({ className, ...props }: React.ComponentPropsWithRef<'h2'>) => <h2 {...props} className={cn(titleProps(), className)} />

const actionProps = cva('card-actions justify-end');
export const CardAction = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => <div {...props} className={cn(actionProps(), className)} />

const bodyProps = cva('card-body');
export const CardBody = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => <div {...props} className={cn(bodyProps(), className)} />

type imageProps = Required<Pick<React.ComponentPropsWithRef<'img'>, 'src' | 'alt'>>

export const CardImage = ({ src, alt, ...props }: imageProps & Omit<React.ComponentPropsWithRef<'img'>, keyof imageProps> ) => (
  <img {...props} src={src} alt={alt} />
)

export const CardFigure = (props: Omit<React.ComponentPropsWithRef<'figure'>, keyof imageProps> ) => (
  <figure {...props} />
)
