import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const heroProps = cva('hero')
export type heroBase = VariantProps<typeof heroProps>
interface heroProps extends heroBase, Omit<React.ComponentPropsWithRef<'div'>, keyof heroBase>{
  overlay?: boolean
}

export const Hero = ( { children, className, overlay = false, ...props }: heroProps ) => {
  return <div {...props} className={cn(heroProps(), className)}>
    {overlay && <div className="hero-overlay" /> }
    {children}
  </div>
}
  
const sectionProps = cva('hero-content')
export const HeroSection = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={cn(sectionProps(), className)} />
}
