'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Input from "../common/input/Input"
import Button from "../common/Button"
import SelectMenu from "../common/select-menu/SelectMenu"
import { ISelectMenuItem } from "../common/select-menu/SelectMenuItem"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const items: ISelectMenuItem[] = [
    {
        value: 'eune',
        displayValue: 'EUNE',
        // displayValue: 'EUNE - Europe Nodic & East',
    },
    {
        value: 'euw',
        displayValue: 'EUW',
        // displayValue: 'EUW - Europe West',
    },
    {
        value: 'lan',
        displayValue: 'LAN',
        // displayValue: 'LAN - Latin America North ',
    },
    {
        value: 'las',
        displayValue: 'LAS',
        // displayValue: 'LAS - Latin America South',
    },
    {
        value: 'na',
        displayValue: 'NA',
        // displayValue: 'NA - North America',
    },
    {
        value: 'oce',
        displayValue: 'OCE',
        // displayValue: 'OCE - Oceania',
    },
    {
        value: 'ru',
        displayValue: 'RU',
        // displayValue: 'RU - Russia',
    },
    {
        value: 'tr',
        displayValue: 'TR',
        // displayValue: 'TR - Turkey',
    },
    {
        value: 'jp',
        displayValue: 'JP',
        // displayValue: 'JP - Japan',
    },
    {
        value: 'pbe',
        displayValue: 'PBE',
        // displayValue: 'PBE - Public Beta Environment',
    }
]

export default function SearchBarSection() {
    return (
        <section className="max-md:col-span-3 col-span-2 md:justify-end flex items-center gap-3">
            <Input placeholder="Search Summoner name or Champion..."
                containerStyle="group max-md:w-full w-2/3 transition-[width] duration-300 ease-in-out focus-within:w-full"
                Prefix={<SelectMenu defaultValue="eune" items={items} />}
                Postfix={
                    <Button className="gap-0 gap-[0rem]">
                        <FontAwesomeIcon icon={faSearch} size='sm' />
                        <p className="max-w-0 overflow-hidden transition-all md:group-focus-within:max-w-lg md:group-focus-within:ml-2">Search</p>
                    </Button>}
            />
        </section>
    )
}