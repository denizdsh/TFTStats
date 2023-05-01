import { ICDragonTFTChampion, ICDragonTFTTrait } from "./cdragonTFT";
import { IGenericTFTChampion } from "./genericTFT";

export interface ITFTChampion extends IGenericTFTChampion {
    traits: ICDragonTFTTrait[]
}
