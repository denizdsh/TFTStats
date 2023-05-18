'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../common/Sidebar';
import Button from '../common/Button';
import BaseNav, { baseLinks } from './BaseNav';

const links = [{ title: 'Home', link: '/' }, ...baseLinks]

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='md:hidden flex justify-end'>

            <Button onClick={() => setIsOpen(true)}>
                <FontAwesomeIcon icon={faBars} size='lg' />
            </Button>

            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} closeOnClickOutside={true} position='right'>
                <BaseNav orientation='col' hideOn='md' containerClassName='px-4' links={links} onLinkClick={() => setIsOpen(false)} />
            </Sidebar>
        </div>
    )
}
