import Image from "next/image";
import Link from "next/link";

import styles from "@styles/components/header.module.css";
import MainNav from "./MainNav";
import SearchBarSection from "./SearchBarSection";
import { bebasNeue } from "@src/fonts";
import MobileNav from "./MobileNav";

import logo from "@images/icons/icon-transparent-bg-180x180.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-b-indigo-950 bg-surface/[0.85] py-1 backdrop-blur-sm max-2xl:px-3">
      <article className="m-auto grid max-w-screen-2xl grid-cols-5 items-center">
        <section className="md:col-span-3 md:flex md:items-center md:gap-5 lg:gap-10">
          <article>
            <Link href="/" className="flex items-center gap-2 font-bebas-neue">
              <Image
                src={logo}
                alt="Logo"
                height={60}
                width={60}
                loading="eager"
              />
              <h1
                className={`headline-small max-lg:hidden ${styles.logoTitle} ${bebasNeue.className}`}
              >
                TFTSTATS
              </h1>
            </Link>
          </article>

          <MainNav />
        </section>

        <SearchBarSection />

        <MobileNav />
      </article>
    </header>
  );
}
