'use client';

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, ReactNode, useEffect, useRef } from "react";
import Button from "./Button";

interface ISidebarProps {
    isOpen: boolean,
    setIsOpen: Dispatch<React.SetStateAction<boolean>>
    children?: ReactNode,
    hideCloseBtn?: boolean,
    hideBackgroundShadow?: boolean,
    closeOnClickOutside: boolean,
    className?: string,
    position: 'right' | 'left'
}

export default function Sidebar(props: ISidebarProps) {
    const sidebarRef = useRef<HTMLElement>(null);

    useEffect(() => { // Prevent page from overflowing during sidebar animation
        const sidebar = sidebarRef.current; // Use a variable to dodge warning

        if (!sidebar) {
            return;
        }

        const transitionStart = () => {
            document.body.style.overflowX = 'hidden';
        }

        const transitionEnd = () => {
            document.body.style.overflowX = 'auto';
        }

        sidebar.addEventListener('transitionstart', transitionStart);
        sidebar.addEventListener('transitionend', transitionEnd);

        return () => {
            sidebar.removeEventListener('transitionstart', transitionStart);
            sidebar.removeEventListener('transitionend', transitionEnd);
        }

    }, [sidebarRef]);


    const closeSidebar = () => props.setIsOpen(false);

    return (
        <>
            {props.isOpen && props.closeOnClickOutside &&
                <div className={`${props.hideBackgroundShadow ? '' : 'bg-shadow/25 z-40'} fixed h-screen w-full top-0 left-0 `}
                    onClick={closeSidebar} />}

            <article ref={sidebarRef} className={`z-50 bg-surface min-h-screen top-0 ${props.position}-0 fixed transition-transform ${props.isOpen ? 'w-64 translate-x-0' : 'overflow-hidden max-w-0 w-0 translate-x-full'} ${props.className}`}>
                <section className={`flex justify-${props.position === 'left' ? 'start' : 'end'} p-2`}>
                    <Button onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faX} />
                    </Button>
                </section>
                {props.children}
            </article>
        </>

    )
}