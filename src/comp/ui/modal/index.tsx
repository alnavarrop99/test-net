import { cva, type VariantProps } from "class-variance-authority";
import { Children, createContext, isValidElement, useRef, useState } from "react";
import { Button } from "../button";
import { cn } from "~/lib";

export const modalProps = cva('modal', {
  variants: {
    align: {
      top: 'modal-top',
      bottom: 'modal-bottom',
      middle: 'modal-middle',
    },
    open: {
      true: 'modal-open',
      false: '',
    },
  },
  defaultVariants: {
    align: 'middle',
    open: false,
  },
});

export type modalBase = VariantProps<typeof modalProps> & {
  onOpen?: ( open?: boolean ) => void
  onClose?: ( ) => void
  backdrop?: boolean
}
interface modalProps extends modalBase, Omit<React.ComponentPropsWithRef<'dialog'>, keyof modalBase>{}

const handleCtx = createContext<Pick<modalProps, 'onClose'>&{ onOpen?:()=>void }|undefined>(undefined)
export const Modal = ({ onClose, onOpen, open, align, backdrop = true, children, className, ...props }: modalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(!!open)
  const ref = useRef<React.ComponentRef<'dialog'>>(null)

  const handleOpen = ( open?: typeof isOpen ) => () => {
    ref.current?.showModal();
    onOpen?.(open)
  };

  const handleClose = () => {
    ref.current?.close();
    onClose?.();
  };

  const toogleOpen = ( fun?: ()=>void ) => () => {
    setIsOpen(open => !open)
    fun?.()
  }

  const list = Children.toArray(children)
  const button = list.find( value => isValidElement(value) && value.type === ModalButton )
  const rest = list.find( value => isValidElement(value) && value !== button )

  return <handleCtx.Provider value={{ onClose: handleClose, onOpen: toogleOpen(handleOpen(!isOpen)) }}>
    {button}
    <dialog {...props} ref={ref} className={cn(modalProps({ open: isOpen, align: align }), className)} onClose={toogleOpen(onClose)}>
      {rest}
      {backdrop && <ModalBackdrop />}
    </dialog>
  </handleCtx.Provider>
}

export const ModalButton: typeof Button = (props) => {
  return <handleCtx.Consumer>
    {(value) => <Button {...props} onClick={value?.onOpen} />}
  </handleCtx.Consumer>
}

export const ModalClose: typeof Button = (props) => {
  return <handleCtx.Consumer>
    {(value) => <Button {...props} onClick={value?.onClose} />}
  </handleCtx.Consumer>
}

const boxProps = cva("modal-box")
export const ModalBox = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={cn(boxProps(), className)} />
}

const actionProps = cva("modal-action")
export const ModalAction = ({ className, ...props }: React.ComponentPropsWithRef<'div'>) => {
  return <div {...props} className={cn(actionProps(), className)} />
}

const ModalBackdrop = () => {
  return <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
}
