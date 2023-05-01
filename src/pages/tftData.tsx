import config from "@src/config.mjs";
import { getChamps } from "@src/lib/TFTService";

export async function getStaticProps() {
    const data = getChamps();

    return {
        props: {
            data
        }
    }
}

export default function TFTData(props: { data: any }) {
    return (
        <code>
            {JSON.stringify(props.data)}
        </code>
    )
}