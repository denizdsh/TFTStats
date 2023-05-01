import fs from 'fs';
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

function readTFTFile(): Readonly<ICDragonTFT> {
    if (Boolean(tftFile)) {
        return tftFile;
    }

    const file = JSON.parse(fs.readFileSync(tftFilePath, 'utf8')) as ICDragonTFT;

    console.log('file read');

    tftFile = file;

    return file;
}

export function getChamps(): Readonly<ICDragonTFTChampion[]> {
    const file = readTFTFile();

    return file.champions;
}

export function getTraits(): Readonly<ICDragonTFTTrait[]> {
    const file = readTFTFile();

    return file.traits;
}

export function getChampByName(name: string): Readonly<ITFTChampion> | null {
    const champ = getChamps()
        .find((champ: ICDragonTFTChampion) => champ.name === name);

    if (!champ) {
        return null;
    }

    const traits = getTraits()
        .filter((trait: ICDragonTFTTrait) => champ.traits.includes(trait.name));

    return { ...champ, traits };
}