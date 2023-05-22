"use client";

import Input from "../common/input/Input";
import SelectMenu from "../common/select-menu/SelectMenu";
import { ISelectMenuItem } from "../common/select-menu/SelectMenuItem";
import SearchButton from "../common/input/SearchButton";

const items: ISelectMenuItem[] = [
  {
    value: "eune",
    displayValue: "EUNE",
    // displayValue: 'EUNE - Europe Nodic & East',
  },
  {
    value: "euw",
    displayValue: "EUW",
    // displayValue: 'EUW - Europe West',
  },
  {
    value: "lan",
    displayValue: "LAN",
    // displayValue: 'LAN - Latin America North ',
  },
  {
    value: "las",
    displayValue: "LAS",
    // displayValue: 'LAS - Latin America South',
  },
  {
    value: "na",
    displayValue: "NA",
    // displayValue: 'NA - North America',
  },
  {
    value: "oce",
    displayValue: "OCE",
    // displayValue: 'OCE - Oceania',
  },
  {
    value: "ru",
    displayValue: "RU",
    // displayValue: 'RU - Russia',
  },
  {
    value: "tr",
    displayValue: "TR",
    // displayValue: 'TR - Turkey',
  },
  {
    value: "jp",
    displayValue: "JP",
    // displayValue: 'JP - Japan',
  },
  {
    value: "pbe",
    displayValue: "PBE",
    // displayValue: 'PBE - Public Beta Environment',
  },
];

export default function SearchBarSection() {
  return (
    <section className="col-span-2 flex items-center gap-3 max-md:col-span-3 md:justify-end">
      <Input
        placeholder="Search Summoner or Champion..."
        containerStyle="max-md:w-full w-2/3 transition-[width] duration-300 ease-in-out focus-within:w-full"
        Prefix={<SelectMenu defaultValue="eune" items={items} />}
        Postfix={<SearchButton />}
      />
    </section>
  );
}
