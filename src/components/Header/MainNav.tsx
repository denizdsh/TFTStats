'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BaseNav, { baseLinks } from './BaseNav';


export default function MainNav() {
    return (
        <Nav orientation='row' mediaQuery='max-md' />
    )
}

function Nav(props: { orientation: 'row' | 'col', mediaQuery: 'max-md' | 'md', containerClassName?: string, linkClassName?: string }) {
    const pathname = usePathname();

    return (
        <BaseNav orientation='row' hideOn='max-md' links={baseLinks} />
    )
}