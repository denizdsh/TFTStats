import { getChampByName, getChamps } from "@src/lib/tftService";
import Link from "next/link";

export default async function TFTData() {
    const champs = await getChamps();

    return (
        <>
            <Link href='/tft/champ'>
                Link to Fiddlesticks
            </Link>
            <code>
                {JSON.stringify(champs)}
            </code>
        </>
    )
}