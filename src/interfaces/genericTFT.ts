import { ICDragonTFTChampionAbility, ICDragonTFTChampionStats } from "./cdragonTFT";

export interface IGenericTFTChampion {
    ability: ICDragonTFTChampionAbility,
    apiName: string,
    cost: number,
    icon: string,
    name: string,
    stats: ICDragonTFTChampionStats
}