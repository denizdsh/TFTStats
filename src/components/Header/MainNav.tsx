'use client';

import BaseNav, { baseLinks } from './BaseNav';

export default function MainNav() {
    return (
        <BaseNav orientation='row' hideOn='max-md' links={baseLinks} />
    )
}