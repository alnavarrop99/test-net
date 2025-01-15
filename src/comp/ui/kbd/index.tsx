import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const kbdProps = cva('kbd', {
  variants: {
    size: {
      default: 'size-auto',
      lg: 'kbd-lg',
      md: 'kbd-md',
      sm: 'kbd-sm',
      xs: 'kbd-xs',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type kbdBase = VariantProps<typeof kbdProps>
interface kbdProps extends kbdBase, Omit<React.ComponentPropsWithRef<'kbd'>, keyof kbdBase>{}

export const Kbd = ( { size, className, ...props }: kbdProps ) => {
  return <kbd {...props} className={cn(kbdProps({ size }), className)} />
}
