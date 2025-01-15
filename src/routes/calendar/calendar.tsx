import { createContext, useId } from "react"
import { buttonProps } from "~/comp"
import { cn } from "~/lib"

const NameCtx = createContext<{ name?: string, defaultValue?: string }>({ name: undefined })

type Props = React.ContextType<typeof NameCtx>
export const CalendarGroup = ({name, defaultValue, ...props}: Props & Omit<React.ComponentPropsWithRef<typeof NameCtx.Provider>, 'value'>) => {
  const deafaultName = useId()
  return <NameCtx.Provider {...props} value={{
    name: deafaultName ?? name,
    defaultValue
  }}/> 
}

export const CalendarGroupItem = ({className, children, value, ...props}: React.ComponentPropsWithRef<'input'>) => {
  return <NameCtx.Consumer>
    {({ defaultValue, name }) => (<div className={cn("relative ring-2 w-auto text-2xl [&:has(input:checked)]:bg-neutral [&:has(input:checked)]:text-neutral-content cursor-pointer", buttonProps({ layout: 'square', variant: 'outline', color: "neutral" }), className)}>
      <input {...props} type="radio" name={name} defaultChecked={defaultValue === value} value={value} className="peer size-full absolute appearance-none" />
      <label>{children}</label>
    </div>)}
  </NameCtx.Consumer>
}
