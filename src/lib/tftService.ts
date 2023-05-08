import fs from 'fs/promises';
import path from 'path';

import { ICDragonTFTChampion, ICDragonTFT, ICDragonTFTTrait } from '@src/interfaces/cdragonTFT';
import { ITFTChampion } from '@src/interfaces/generalTFT';
import config from '@src/config.mjs';

const cdragonTFTFilename = config.CDRAGON_TFT_FILENAME
    .replace(
        config.LANG_TEMPLATE,
        config.CDRAGON_TFT_DEFAULT_LANGUAGE
    );

const tftFilePath = path.join(process.cwd(), config.DATA_DIRECTORY, cdragonTFTFilename);

let tftFile: Readonly<ICDragonTFT>;

async function readTFTFile(): Promise<Readonly<ICDragonTFT>> {
    if (Boolean(tftFile)) {
        return tftFile;
    }

    const file = JSON.parse(await fs.readFile(tftFilePath, 'utf8')) as ICDragonTFT;

    console.log('file read');

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

export async function getChampByName(name: string): Promise<Readonly<ITFTChampion> | null> {
    const champ = (await getChamps())
        .find((champ: ICDragonTFTChampion) => champ.name === name);

    if (!champ) {
        return null;
    }

    const traits = (await getTraits())
        .filter((trait: ICDragonTFTTrait) => champ.traits.includes(trait.name));

    return { ...champ, traits };
}
