import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "../link";
import { cn } from "~/lib";

export const breadcrumbsProps = cva('breadcrumbs', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type breadcrumbsBase = VariantProps<typeof breadcrumbsProps>
interface breadcrumbsProps extends breadcrumbsBase, Omit<React.ComponentPropsWithRef<'div'>, keyof breadcrumbsBase>{}

export const Breadcrumb = ( { size, className, children, ...props }: breadcrumbsProps ) => {
  return (<div {...props} className={cn(breadcrumbsProps({size}), className)}>
    <ul>{children}</ul>
  </div>)
}

export const BreadcrumbItem = (props: React.ComponentPropsWithRef<'li'>) => {
  return <li {...props} />
}

export const BreadcrumbLink = (props: React.ComponentPropsWithRef<typeof Link>) => {
  return <BreadcrumbItem><Link {...props} /></BreadcrumbItem>
}

