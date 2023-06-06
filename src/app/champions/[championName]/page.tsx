import { ITFTChampion } from "@src/interfaces/generalTFT";
import {
  getTFTImageURL,
  getChampByName,
  getChamps,
  mapChampionName,
} from "@src/lib/tftService";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const champs = await getChamps();

  return champs.map((c) => ({
    championName: mapChampionName(c.name),
  }));
}

interface ITFTChampionProps {
  params: {
    championName: string;
  };
}

export default async function TFTChampion(props: ITFTChampionProps) {
  const champ = await getChampByName(props.params.championName);

  if (!champ) {
    notFound();
  }

  return (
    <article>
      <h1>{champ.name}</h1>
      <Image
        width={200}
        height={100}
        src={getTFTImageURL(champ.icon)}
        alt={`${champ.name}`}
      />

      <section>
        <p>{champ.ability.name}</p>
        <Image
          width={64}
          height={64}
          src={getTFTImageURL(champ.ability.icon)}
          alt={`${champ.name}'s Ability Icon`}
        />
        <p>{champ.ability.desc}</p>
        <p>{champ.ability.variables.join("\t")}</p>
      </section>
    </article>
  );
}
