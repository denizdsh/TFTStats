import Image from "next/image"
import Link from "next/link"

import styles from '@styles/components/header.module.css';
import MainNav from "./MainNav";
import SearchBarSection from "./SearchBarSection";
import { bebasNeue } from "@src/fonts";
import MobileNav from "./MobileNav";


export default function Header() {
    return (
        <header className="max-2xl:px-3 py-1 sticky top-0 bg-surface/[0.85] border-b-2 border-b-indigo-950 backdrop-blur-sm">
            <article className="max-w-screen-2xl m-auto grid grid-cols-5 items-center">
                <section className="md:flex md:items-center lg:gap-10 md:gap-5 md:col-span-3">
                    <article>
                        <Link href='/' className="flex items-center gap-2 font-bebas-neue">
                            <Image src='/images/icon-transparent-bg-180x180.png' alt='TFTStats Logo' height={60} width={60} />
                            <h1 className={`max-lg:hidden headline-small ${styles.logoTitle} ${bebasNeue.className}`}>TFTSTATS</h1>
                        </Link>
                    </article>

                    <MainNav />
                </section>

                <SearchBarSection />

                <MobileNav />
            </article>
        </header>
    )
}