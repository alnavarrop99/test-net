import { Link } from "react-router-dom"
import { buttonProps } from "~/comp"
import { cn } from "~/lib"

export const NavItem = ({className, ...props}: React.ComponentPropsWithRef<typeof Link>) => {
  return <Link {...props} className={cn(buttonProps({ variant: 'default', layout: 'square', color: 'neutral' }))} />
}
