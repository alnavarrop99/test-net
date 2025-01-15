import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";
import { Link as LinkRouter } from 'react-router-dom'
import { buttonProps } from "../button";

export const linkProps = cva('link', {
  variants: {
    status: {
      none: "",
      success: 'link-success',
      info: 'link-info',
      warning: 'link-warning',
      error: 'link-error',
    },
    color: {
      neutral: 'link-neutral',
      primary: 'link-primary',
      secondary: 'link-secondary',
      accent: 'link-accent',
    },
    noHover: {
      false: 'link-hover',
      true: 'no-underline',
    },
  },
  defaultVariants: {
    color: "primary",
    noHover: false,
    status: 'none',
  },
});

export type linkBase = VariantProps<typeof linkProps>
interface linkProps extends linkBase, Omit<React.ComponentPropsWithRef<typeof LinkRouter>, keyof linkBase>{
  asButton?: boolean
}

export const Link = ( { color, noHover, status, asButton = false, className, ...props }: linkProps ) => {
  return <LinkRouter {...props} className={cn(!asButton ? linkProps({ color, noHover, status }) : buttonProps({color, noAnimation: noHover, status}), className)} />
}
