import Image from "next/image";
import Link from "next/link";
import { ICDragonTFTChampion } from "@src/interfaces/cdragonTFT";
import {
  getTFTImageURL,
  getTraits,
  mapChampionName,
} from "@src/lib/tftService";

import goldCoinImage from "@images/gold-coin.png";
import { IPlaiceholderImage } from "@src/lib/util";

export default async function ChampionCard({
  c,
  border,
  borderActive,
  image,
}: {
  c: ICDragonTFTChampion;
  border: string;
  borderActive: string;
  image: IPlaiceholderImage;
}) {
  const traits = (await getTraits()).filter((t) => c.traits.includes(t.name));

  return (
    <li key={c.name} className="max-sm:flex-grow-[1]">
      <Link href={`/champions/${mapChampionName(c.name)}`}>
        <article
          className={`transition-colors ${border} overflow-auto rounded-md border-2 ${borderActive}`}
        >
          <section className="max-h-[101px] overflow-hidden">
            <Image
              width={202}
              height={101}
              quality={100}
              src={image.img.src}
              placeholder="blur"
              blurDataURL={image.base64}
              alt={`${c.name}'s Icon`}
              className="max-md:w-full"
            />
          </section>
          <section className="px-3 py-2">
            <section className="flex items-center justify-between">
              <p className="body-medium">{c.name}</p>

              <article className="flex items-center gap-1">
                <p className="body-small">{c.cost}</p>
                <Image height={12} width={12} src={goldCoinImage} alt="Cost" />
              </article>
            </section>
            {traits.length > 0 && (
              <ul className="flex flex-wrap justify-start gap-2">
                {traits.map((t) => (
                  <li key={t.name} title={t.name}>
                    <Image
                      height={16}
                      width={16}
                      src={getTFTImageURL(t.icon, "tex")}
                      alt={`Trait ${t.name}`}
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </article>
      </Link>
    </li>
  );
}
