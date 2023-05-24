import ChampionCard from "@src/components/champions/ChampionCard";
import ChampionsContainer from "@src/components/champions/ChampionsContainer";
import Filter from "@src/components/common/filter/Filter";
import FilterList from "@src/components/common/filter/FilterList";
import FiltersContainer from "@src/components/common/filter/FiltersContainer";
import Input from "@src/components/common/input/Input";
import SearchButton from "@src/components/common/input/SearchButton";
import config from "@src/config.mjs";
import { bebasNeue } from "@src/fonts";
import { ICDragonTFTChampion } from "@src/interfaces/cdragonTFT";
import {
  getChamps,
  getTFTImageURL,
  getTraits,
  mapChampionName,
} from "@src/lib/tftService";

import goldCoinImage from "@images/gold-coin.png";
import { IPlaiceholderImage, getImages } from "@src/lib/util";

export default async function Champions() {
  // Fetch Champoions
  const allChamps = await getChamps();
  const { champs, extraChamps } = allChamps.reduce(
    (champsObj, currentChamp) => {
      // separate playable champions from mobs / special items
      if (currentChamp.traits && currentChamp.traits.length > 0) {
        champsObj.champs.push(currentChamp);
      } else {
        champsObj.extraChamps.push(currentChamp);
      }

      return { ...champsObj };
    },
    {
      champs: [] as ICDragonTFTChampion[],
      extraChamps: [] as ICDragonTFTChampion[],
    }
  );

  const championCostTiers = Array.from(
    allChamps.reduce((set, ch) => {
      return set.add(ch.cost);
    }, new Set<number>())
  )
    .sort((a, b) => a - b)
    .map((c) => c.toString());

  // Fetch Traits
  const traits = await getTraits();

  // Fetch Images
  const images = (
    await getImages("./public/images/champions/*.{jpg,png}")
  ).reduce((acc: { [key: string]: IPlaiceholderImage }, image: IPlaiceholderImage) => {
    const key =
      image.img.src.split("/").at(-1)?.replace(".png", "") || // Champion name
      image.img.src;

    acc[key] = image;

    return acc;
  }, {});

  // -----

  const getBorderClasses = (cost: number) => {
    switch (cost) {
      case 1:
        return {
          border: "border-1-cost",
          borderActive: "hover:border-1-cost-active",
        };
      case 2:
        return {
          border: "border-2-cost",
          borderActive: "hover:border-2-cost-active",
        };
      case 3:
        return {
          border: "border-3-cost",
          borderActive: "hover:border-3-cost-active",
        };
      case 4:
        return {
          border: "border-4-cost",
          borderActive: "hover:border-4-cost-active",
        };
      case 5:
        return {
          border: "border-5-cost",
          borderActive: "hover:border-5-cost-active",
        };
      default:
        return {
          border: "border-secondary-container",
          borderActive: "hover:border-tertiary-container",
        };
    }
  };

  const extraChampsBorderClasses = getBorderClasses(0);

  return (
    <article className="grid grid-cols-4 gap-8">
      <aside className="col-span-1 max-lg:col-span-4">
        <h1 className={`headline-large text-center ${bebasNeue.className}`}>
          TFT Set {config.TFT_SET}
          {config.isMidSet ? ".5" : ""} Champions
        </h1>
        <article className="sticky top-20">
          <Input
            containerStyle="w-full my-2"
            placeholder="Search Champions"
            Postfix={<SearchButton />}
          />

          <FiltersContainer>
            <FilterList
              title="Traits"
              queryName="traits"
              queryValues={traits.map((t) => mapChampionName(t.name))}
            >
              {traits.map((t) => (
                <Filter
                  key={t.apiName}
                  content={t.name}
                  queryName="traits"
                  queryContent={mapChampionName(t.name)}
                  imageWidth={30}
                  imageHeight={30}
                  imageSrc={getTFTImageURL(t.icon)}
                  imageAlt={`${t.name} Icon`}
                />
              ))}
            </FilterList>

            <FilterList
              title="Cost"
              queryName="cost"
              queryValues={championCostTiers}
            >
              {championCostTiers.map((c) => (
                <Filter
                  key={c}
                  content={`${c}-cost`}
                  queryName="cost"
                  queryContent={c}
                  imageWidth={16}
                  imageHeight={16}
                  imageSrc={goldCoinImage}
                  imageAlt={`Gold Icon`}
                />
              ))}
            </FilterList>
          </FiltersContainer>
        </article>
      </aside>

      <section className="col-span-3 max-lg:col-span-4">
        <ChampionsContainer>
          {champs.map((c) => {
            const borderClasses = getBorderClasses(c.cost);

            return (
              // @ts-ignore - async function
              <ChampionCard
                key={c.name}
                c={c}
                image={images[mapChampionName(c.name)]}
                border={borderClasses.border}
                borderActive={borderClasses.borderActive}
              />
            );
          })}
        </ChampionsContainer>

        <h2 className={`headline-medium m-2 mt-10 ${bebasNeue.className}`}>
          Special characters
        </h2>
        <hr className="mb-10 border-tertiary" />

        <ChampionsContainer>
          {extraChamps.map((c) => (
            // @ts-ignore - async function
            <ChampionCard
              key={c.name}
              c={c}
              image={images[mapChampionName(c.name)]}
              border={extraChampsBorderClasses.border}
              borderActive={extraChampsBorderClasses.borderActive}
            />
          ))}
        </ChampionsContainer>
      </section>
    </article>
  );
}
