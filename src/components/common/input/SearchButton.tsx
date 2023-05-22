import { MouseEventHandler } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";

export default function SearchButton(props: { onClick?: MouseEventHandler, className?: string }) {
    return (
        <Button className={`gap-0 gap-[0rem] ${props.className || ''}`} onClick={props.onClick}>
            <FontAwesomeIcon icon={faSearch} size='sm' />
            <p className="max-w-0 overflow-hidden transition-all md:group-focus-within:max-w-lg md:group-focus-within:ml-2">Search</p>
        </Button>
    )
}