import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const footerProps = cva('footer bg-natural text-natural-content');
export type footerBase = VariantProps<typeof footerProps>
interface footerProps extends footerBase, Omit<React.ComponentPropsWithRef<'div'>, keyof footerBase>{}

export const Footer = ( { className, ...props }: footerProps ) => {
  return <div {...props} className={cn(footerProps(), className)} />
}

export const FooterNav = (props: React.ComponentPropsWithRef<'nav'>) => {
  return <nav {...props} />
}

export const FooterAside = (props: React.ComponentPropsWithRef<'aside'>) => {
  return <aside {...props} />
}

const titleProps = cva('footer-title');
export const FooterTitle = ({ className, ...props}: React.ComponentPropsWithRef<'h6'>) => {
  return <h6 {...props} className={cn(titleProps(), className)} />
}

