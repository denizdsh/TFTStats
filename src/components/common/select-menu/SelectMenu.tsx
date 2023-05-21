'use client'

import { useEffect, useRef, useState } from "react"
import SelectMenuItem, { ISelectMenuItem } from "./SelectMenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface ISelectMenuProps {
    items: ISelectMenuItem[],
    defaultValue: string,
    className?: string
}

export default function SelectMenu(props: ISelectMenuProps) {
    const ref = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string>(props.defaultValue);

    useEffect(() => { // Close menu on click away
        const container = ref.current;

        if (!container) {
            return;
        }

        const clickAwayHandler = (e: MouseEvent) => {
            if (container.contains(e.target as HTMLElement)) {
                return;
            }

            setIsOpen(false);
        }

        window.addEventListener("click", clickAwayHandler);

        return () => {
            window.removeEventListener("click", clickAwayHandler);
        }
    }, [ref, setIsOpen])

    const getItemByValue = (value: string) => {
        return props.items.find(item => item.value === value);
    }

    const updateItem = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
    }

    const selectedItem = getItemByValue(selectedValue);

    return (
        <>
            <article ref={ref} className="relative">
                <section className={`p-2 body-medium rounded-md select-none transition-all 
                   ${isOpen ? 'secondary-container on-secondary-container-text rounded-b-none' : 'on-secondary secondary-text'} 
                   flex items-center gap-2 hover:bg-secondary-container hover:text-on-secondary-container`}
                    onClick={() => setIsOpen(o => !o)}>
                    {selectedItem?.selectedDisplayValue || selectedItem?.displayValue}
                    <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} size="xs" />
                </section>

                {isOpen &&
                    <ul className="absolute on-secondary secondary-text w-24 border-secondary-container border-2 rounded-sm rounded-tl-none">
                        {props.items.map(item => <SelectMenuItem key={item.value} onClick={updateItem} {...item} />)}
                    </ul>
                }
            </article>
        </>
    )
}