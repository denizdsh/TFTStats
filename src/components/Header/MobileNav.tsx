'use client';

import { MouseEvent, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../common/Sidebar';
import Button from '../common/Button';
import BaseNav, { baseLinks } from './BaseNav';

const links = [{ title: 'Home', link: '/' }, ...baseLinks]

export default function MobileNav() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => {
        setIsOpen(true);
    }

    const closeSidebar = (e: MouseEvent) => {
        if (!buttonRef.current
            || buttonRef.current.contains(e.target as HTMLElement)) {
            return;
        }

        setIsOpen(false);
    }

    return (
        <div className='md:hidden flex justify-end'>

            <Button ref={buttonRef} onClick={openSidebar}>
                <FontAwesomeIcon icon={faBars} size='lg' />
            </Button>

            <Sidebar isOpen={isOpen} close={closeSidebar} closeOnClickOutside={true} position='right'>
                <BaseNav orientation='col' hideOn='md' containerClassName='px-4' links={links} onLinkClick={closeSidebar} />
            </Sidebar>
        </div>
    )
}
