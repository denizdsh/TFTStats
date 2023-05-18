'use client';

import { ReactNode } from "react";

export interface ISelectMenuItem {
    displayValue: ReactNode,
    value: string,
    selectedDisplayValue?: ReactNode,
    className?: string
}

export default function SelectMenuItem(props: ISelectMenuItem & { onClick: Function }) {
    return (
        <li onClick={() => props.onClick(props.value)} className={`body-medium w-full p-2 transition-colors hover:bg-secondary-container hover:text-on-secondary-container ${props.className}`}>
            {props.displayValue}
        </li>
    )
}