import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const radialProps = cva('radial-progress');

export type radialBase = VariantProps<typeof radialProps> & {
  value: number,
  size?: `${number}rem`,
  thickness?: `${number}rem` | `${number}%`,
}
interface radialProps extends radialBase, Omit<React.ComponentPropsWithRef<'div'>, keyof radialBase> { }

export const RadialProgress = ( { value, size = '8rem', thickness = '10%' , className, ...props }: radialProps ) => {
  // @ts-ignore
  return <div {...props} role="progressbar" style={{ "--value": `${value}`, "--size": `${size}`, "--thickness": `${thickness}` }} className={cn(radialProps(), className)} />
}

export * from './radial-progress'
