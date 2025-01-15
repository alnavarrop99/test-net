type blockProps = { variant: 'head' | 'foot' | 'body' }
const renderBlock: Record<blockProps['variant'], `t${blockProps['variant']}`> = { body: 'tbody', foot: 'tfoot', head: 'thead' }
export const TBlock = ({ variant, ...props }: blockProps & Omit<React.ComponentPropsWithRef<'thead'|'tfoot'|'tbody'>, keyof blockProps>) => {
  const Child = renderBlock[variant]
  return <Child {...props} />
}
