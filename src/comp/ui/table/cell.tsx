type cellProp = { head?: boolean }
export const Cell = ({ head, ...props }: cellProp & Omit< React.ComponentPropsWithRef<'td'|'th'>, keyof cellProp>) => {
  const Child: "th" | "td" = head ? "th" : "td"
  return <Child {...props} />
}
