import { IGenericTFTChampion } from "./genericTFT"

export interface ICDragonTFT {
    champions: ICDragonTFTChampion[],
    name: string,
    traits: ICDragonTFTTrait[]
}

export interface ICDragonTFTChampion extends IGenericTFTChampion {
    traits: string[]
}

export interface ICDragonTFTChampionStats {
    damage: number,
    attackSpeed: number,
    critChance: number,
    critMultiplier: number,
    hp: number,
    initialMana: number,
    mana: number,
    armor: number,
    magicResist: number,
    range: number
}

export interface ICDragonTFTChampionAbility {
    desc: string,
    icon: string,
    name: string,
    variables: {
        name: string,
        value: any[]
    }[]
}

export interface ICDragonTFTTrait {
    apiName: string,
    desc: string,
    effects: {
        maxUnits: number,
        minUnits: number,
        style: number,
        variables: {
            [key: string]: any
        }[]
    }[],
    icon: string,
    name: string
}