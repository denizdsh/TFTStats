import { MouseEventHandler, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode,
    onClick?: MouseEventHandler,
    className?: string
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`p-2 body-medium rounded-md select-none transition-all 
            flex items-center gap-2
            on-secondary secondary-text 
        hover:bg-secondary-container hover:text-on-secondary-container leading-10 ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}