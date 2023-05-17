import { Bebas_Neue, Roboto } from "next/font/google";

export const roboto = Roboto({
    weight: ['300', '400', '500'],
    display: 'swap',
    subsets: ['latin', 'cyrillic']
});

export const bebasNeue = Bebas_Neue({
    weight: ['400'],
    display: 'swap',
    subsets: ['latin']
});
