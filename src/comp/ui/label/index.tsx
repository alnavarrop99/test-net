import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const labelProps = cva('label', {
  variants: {
    control: {
      true: 'form-control',
      false: '',
    }
  },
  defaultVariants: {
    control: false
  },
});

export type labelBase = VariantProps<typeof labelProps>
interface labelProps extends labelBase, Omit<React.ComponentPropsWithRef<'label'>, keyof labelBase>{}

export const Label = ( { className, ...props }: labelProps ) => {
  return <label {...props} className={cn(labelProps(), className)} />
}

const itemControlProps = cva('label-text', {
  variants: {
    alt: {
      true: 'label-text-alt',
      false: ''
    }
  },
  defaultVariants: {
    alt: false
  }
})

export type labelItemControlBase = VariantProps<typeof itemControlProps>
interface labelItemControlProps extends labelItemControlBase, Omit<React.ComponentPropsWithRef<'div'>, keyof labelItemControlBase>{}

export const LabelControlItem = ( { alt, className, ...props }: labelItemControlProps ) => {
  return <div {...props} className={cn(itemControlProps({ alt }), className)} />
}
