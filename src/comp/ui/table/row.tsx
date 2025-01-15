import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "~/lib"

export const rowProps = cva('', {
  variants: {
    noHover: {
      false: 'hover',
      true: ''
    }
  },
  defaultVariants: {
    noHover: false
  }
})
type rowBase = VariantProps<typeof rowProps>
interface rowProps extends rowBase, Omit<React.ComponentPropsWithRef<'tr'>, keyof rowBase> {}

export const Row = ({ noHover, className, ...props }: rowProps) => {
  return <tr {...props} className={cn(rowProps({noHover}), className)} />
}
