'use client';

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, ReactNode, useEffect, useRef } from "react";
import Button from "./Button";

interface ISidebarProps {
    isOpen: boolean,
    close: Function,
    children?: ReactNode,
    hideCloseBtn?: boolean,
    hideBackgroundShadow?: boolean,
    closeOnClickOutside: boolean,
    className?: string,
    position: 'right' | 'left'
}

export default function Sidebar(props: ISidebarProps) {
    const sidebarRef = useRef<HTMLElement>(null);

    useEffect(() => { // close sidebar on click away 
        const sidebar = sidebarRef.current; // Use a variable to dodge warning

        if (!sidebar) {
            return;
        }

        const clickAwayHandler = (e: MouseEvent) => {
            if (!props.isOpen
                || !e.target
                || (e.target instanceof HTMLElement && sidebar.contains(e.target))) {
                return;
            }

            props.close(e)
        }

        window.addEventListener('click', clickAwayHandler);

        return () => {
            window.removeEventListener('click', clickAwayHandler);
        }
    }, [props, props.isOpen, props.close, sidebarRef])


    const pos = props.position || 'right';

    return (
        <>
            <aside ref={sidebarRef}
                className={`z-50 w-64 bg-surface min-h-screen fixed top-0 ${pos === 'right' ? 'right-0' : 'left-0'} transition-transform ${props.isOpen ? 'translate-x-0' : (pos === 'left' ? '-translate-x-full' : 'translate-x-full')} ${props.className || ''}`}>
                <section className={`p-2 flex ${pos === 'left' ? 'justify-start' : 'justify-end'}`}>
                    <Button onClick={props.close as MouseEventHandler}>
                        <FontAwesomeIcon icon={faX} />
                    </Button>
                </section>
                {props.children}
            </aside>

            {props.hideBackgroundShadow || <div className={`fixed top-0 left-0 z-40 w-full h-screen pointer-events-none transition-colors ${props.isOpen ? 'bg-shadow/20' : ''}`} />}
        </>
    )
}

/*
Effect for disabling scrollbar during sidebar entering the view
NOT currently needed since body has a overflox-x: hidden in main layout 

useEffect(() => { // Prevent page from overflowing during sidebar animation
        const sidebar = sidebarRef.current; // Use a variable to dodge warning

        if (!sidebar) {
            return;
        }
        const transitionStartHandler = () => {
            document.body.style.overflowX = 'hidden';
        }

        const transitionEndHandler = () => {
            document.body.style.overflowX = 'auto';
        }

        sidebar.addEventListener('transitionstart', transitionStartHandler);
        sidebar.addEventListener('transitionend', transitionEndHandler);

        return () => {
            sidebar.removeEventListener('transitionstart', transitionStartHandler);
            sidebar.removeEventListener('transitionend', transitionEndHandler);
        }

    }, [sidebarRef]);
*/