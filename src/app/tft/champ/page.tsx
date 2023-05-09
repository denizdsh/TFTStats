import { getChampByName } from "@lib/tftService";

export default async function Champ() {
    const fiddlesticks = await getChampByName('Fiddlesticks');

    return (
        <div>
            <p>{JSON.stringify(fiddlesticks)}</p>
        </div>
    )
}