import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { cn } from "~/lib";

export const swapProps = cva('swap', {
  variants: {
    active: {
      true: 'swap-active',
      false: '',
    },
    effect: {
      fade: '',
      rotate: 'swap-rotate',
      flip: 'swap-flip',
    },
  },
  defaultVariants: {
    active: false,
    effect: 'fade',
  },
});

export type swapBase = VariantProps<typeof swapProps> & {
  onToggle?: (isActive?: boolean) => void
}
interface swapProps extends swapBase, Omit<React.ComponentPropsWithRef<'label'>, keyof swapBase> { }

export const Swap = ({ active, effect, onToggle, className, children, ...props }: swapProps) => {
  const [checked, setChecked] = useState(!!active);

  const handleChange = (ev: React.ChangeEvent<React.ComponentRef<'input'>>) => {
    const isChecked = ev.target.checked;
    setChecked(isChecked);
    onToggle?.(isChecked);
  };

  return (
    <label {...props} className={cn(swapProps({ active: checked, effect }), className)}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {children}
    </label>
  )
}

export const SwapItem = ( { on, of, className, ...props }: { on?: boolean, of?: boolean } & React.ComponentPropsWithRef<'div'> ) => {
  return <div {...props} className={cn({ "swap-on": on, "swap-off": of }, className)} />
}
