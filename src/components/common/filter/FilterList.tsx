"use client";

import {
  MouseEventHandler,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { bebasNeue } from "@src/fonts";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterListProps extends PropsWithChildren {
  title: string;
  queryName: string;
  queryValues: string[];
  hideSelectAll?: boolean;
  hideClearAll?: boolean;
}

export default function FilterList(props: IFilterListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const isFilterActive = Boolean(searchParams?.get(props.queryName));

  useEffect(() => {
    if (!isFilterActive) {
      return;
    }

    setIsOpen(true);
  }, [isFilterActive]);

  useEffect(() => {
    // Open filters by default on non-mobile devices
    // Tailwind max-lg
    if (window.innerWidth > 1024) {
      setIsOpen(true);
    }
  }, []);

  const toggleIsOpen = () => {
    setIsOpen((x) => !x);
  };

  const clearAllFilters = () => {
    if (props.hideClearAll || !searchParams) {
      return;
    }

    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete(props.queryName);

    router.replace(`${pathname}?${newSearchParams}`);
  };

  const selectAllFilters = () => {
    // Append all unused filters to search params
    if (props.hideSelectAll || !searchParams) {
      return;
    }

    const newSearchParams = new URLSearchParams(searchParams.toString());
    const newFilterQueryValues = props.queryValues.filter(
      (qv) => !searchParams.getAll(props.queryName).includes(qv)
    );

    for (const value of newFilterQueryValues) {
      newSearchParams.append(props.queryName, value);
    }

    router.replace(`${pathname}?${newSearchParams}`);
  };

  return (
    <li>
      <section
        onClick={toggleIsOpen}
        className="group flex items-center justify-between"
      >
        <h3
          className={`${bebasNeue.className} title-large relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-tertiary after:transition-all group-hover:after:w-full`}
        >
          {props.title}
        </h3>
        <div className="select-none">
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} size="sm" />
        </div>
      </section>
      <ul
        className={`transition-all ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-auto border-l-2 border-indigo-950 pl-2 pr-1`}
      >
        <li className="flex w-full gap-2 py-1">
          <ActionSpan onClick={selectAllFilters}>Select All</ActionSpan>
          {isFilterActive && (
            <ActionSpan onClick={clearAllFilters}>Clear All</ActionSpan>
          )}
        </li>
        {props.children}
      </ul>
    </li>
  );
}

function ActionSpan(props: PropsWithChildren & { onClick: MouseEventHandler }) {
  return (
    <p
      onClick={props.onClick}
      className="body-small cursor-pointer text-secondary underline-offset-2 hover:underline"
    >
      {props.children}
    </p>
  );
}
