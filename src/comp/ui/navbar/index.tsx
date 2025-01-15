import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const navbarProps = cva('navbar shadow-md rounded-box bg-base-100');
export type navbarBase = VariantProps<typeof navbarProps>
interface navbarProps extends navbarBase, Omit<React.ComponentPropsWithRef<'div'>, keyof navbarBase>{}

export const Navbar = ( { className, ...props }: navbarProps ) => {
  return <div {...props} className={cn(navbarProps(), className)} />
}

export const sectionProps = cva('', {
  variants: {
    justify: {
      start: 'navbar-start',
      center: 'navbar-center',
      end: 'navbar-end',
    },
    stetch: {
      true: 'flex-1',
      false: 'flex-none'
    },
  },
  defaultVariants: {
    stetch: false
  }
})
export type sectionBase = VariantProps<typeof sectionProps>
interface sectionProps extends sectionBase, Omit<React.ComponentPropsWithRef<'div'>, keyof sectionBase>{}
export const NavbarSection = ({ className, stetch, justify, ...props }: sectionProps) => {
  return <div {...props} className={cn(sectionProps({ justify, stetch}), className)} />
}
