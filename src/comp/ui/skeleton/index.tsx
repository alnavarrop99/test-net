import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib";

export const skeletonProps = cva('skeleton');

export type skeletonBase = VariantProps<typeof skeletonProps>
interface skeletonProps extends skeletonBase, Omit<React.ComponentPropsWithRef<'div'>, keyof skeletonBase>{}

export const Skeleton = ( { className, ...props }: skeletonProps ) => {
  return <div {...props} className={cn(skeletonProps(), className)} />
}
