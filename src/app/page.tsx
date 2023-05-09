import Link from 'next/link';

export default function Home() {
    return (
        <article className='flex flex-col  items-center justify-center gap-10 p-10'>
            <Link href='/tft/data'>
                TFT Data
            </Link>
        </article>
    )
}