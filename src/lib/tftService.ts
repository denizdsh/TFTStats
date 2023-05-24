import fs from "fs/promises";
import path from "path";

import {
  ICDragonTFTChampion,
  ICDragonTFT,
  ICDragonTFTTrait,
} from "@interfaces/cdragonTFT";
import { ITFTChampion } from "@interfaces/generalTFT";
import config from "@src/config.mjs";
import { championNameInvalidCharacters } from "./patterns.mjs";

const cdragonTFTFilename = config.CDRAGON_TFT_FILENAME.replace(
  config.LANG_TEMPLATE,
  config.DEFAULT_LANGUAGE
);

const tftFilePath = path.join(
  process.cwd(),
  config.DATA_DIRECTORY,
  cdragonTFTFilename
);

let tftFile: Readonly<ICDragonTFT>;

async function readTFTFile(): Promise<Readonly<ICDragonTFT>> {
  if (Boolean(tftFile)) {
    return tftFile;
  }

  const file = JSON.parse(
    await fs.readFile(tftFilePath, "utf8")
  ) as ICDragonTFT;

  tftFile = file;

  return file;
}

export async function getChamps(): Promise<Readonly<ICDragonTFTChampion[]>> {
  const file = await readTFTFile();

  return file.champions;
}

export async function getTraits(): Promise<Readonly<ICDragonTFTTrait[]>> {
  const file = await readTFTFile();

  return file.traits;
}

export async function getChampByName(
  name: string
): Promise<Readonly<ITFTChampion> | null> {
  name = mapChampionName(name);

  const champ = (await getChamps()).find(
    (champ: ICDragonTFTChampion) => mapChampionName(champ.name) === name
  );

  if (!champ) {
    return null;
  }

  const traits = (await getTraits()).filter((trait: ICDragonTFTTrait) =>
    champ.traits.includes(trait.name)
  );

  return { ...champ, traits };
}

export function getTFTImageURL(url: string, extension?: string): string {
  if (!extension) {
    extension = url.slice(url.lastIndexOf(".") + 1);
  }

  return (
    config.CDRAGON_IMAGE_BASE_URL +
    "/" +
    url.toLocaleLowerCase().replace(`.${extension}`, ".png")
  );
}
/*
export function getAbilityImageURL(url: string): string { // If using the CDragon CDN
    const urlSegments = url.toLocaleLowerCase().split('/');

    const character = urlSegments[urlSegments.indexOf('characters') + 1];
    const ability = urlSegments
        .at(-1)
        ?.split('.')
        .at(0)
        ?.split('')
        .findLast(char => ['q', 'w', 'e', 'r', 'passive'].includes(char));

    return `https://cdn.communitydragon.org/latest/champion/${character}/ability-icon/${ability}`;
}
*/
export function mapChampionName(name: string): string {
  return name.replaceAll(championNameInvalidCharacters, "").toLocaleLowerCase();
}
