import { MouseEventHandler, ReactNode, Ref, forwardRef } from "react"

interface ButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler,
    className?: string
}

function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
    return (
        <button ref={ref} className={`p-2 body-medium rounded-md select-none transition-all flex items-center gap-2 on-secondary secondary-text 
        hover:bg-secondary-container hover:text-on-secondary-container ${props.className || ''}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default forwardRef(Button);