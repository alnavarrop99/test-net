import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const collapseProps = cva('collapse', {
  variants: {
    open: {
      true: 'collapse-open',
      false: 'collapse-false'
    },
    shape: {
      none: '',
      plus: 'collapse-plus',
      arrow: 'collapse-arrow'
    },
  },
  defaultVariants: {
    shape: 'none',
    open: false
  },
});

export type collapseBase = VariantProps<typeof collapseProps>
interface collapseProps extends collapseBase, Omit<React.ComponentPropsWithRef<'div'>, keyof collapseBase>{}

export const Collapse = ( { open, shape, className, ...props }: collapseProps ) => {
  return <div tabIndex={0} {...props} className={cn(collapseProps({ open, shape }), className)} />
}

const contentProps = cva('collapse-content')
export const CollapseContent = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(contentProps(), className)} />
}

const titleProps = cva('collapse-title')
export const CollapseTitle = ( { className, ...props }: React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn(titleProps(), className)} />
}


