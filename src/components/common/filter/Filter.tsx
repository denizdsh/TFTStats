"use client";

import Image from "next/image";
import { bebasNeue } from "@src/fonts";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterProps {
  imageHeight?: number;
  imageWidth?: number;
  imageSrc: string;
  imageAlt: string;
  content: string;
  queryName: string;
  queryContent: string;
}

export default function Filter(props: IFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams?.getAll(props.queryName) || [];

  const isFilterActive = query.includes(props.queryContent);

  const handleFilter = () => {
    if (!searchParams) {
      return;
    }

    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (isFilterActive) {
      // If active -> delete current params and append them back WITHOUT current one
      const newFilterQueryValues = query.filter(
        (qp) => qp !== props.queryContent
      );

      newSearchParams.delete(props.queryName);

      for (const value of newFilterQueryValues) {
        newSearchParams.append(props.queryName, value);
      }
    } else {
      // If not active -> append (activate) it
      newSearchParams.append(props.queryName, props.queryContent);
    }

    router.replace(`${pathname}?${newSearchParams}`);
  };

  return (
    <li
      onClick={handleFilter}
      className="group my-1 flex flex-wrap items-center justify-between"
    >
      <section className="flex flex-wrap items-center gap-4">
        <Image
          height={props.imageHeight || 26}
          width={props.imageWidth || 26}
          src={props.imageSrc}
          alt={props.imageAlt}
          className="select-none"
          style={{ maxWidth: props.imageWidth, maxHeight: props.imageHeight }}
        />

        <p
          className={`${bebasNeue.className} title-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-tertiary after:transition-all group-hover:after:w-full`}
        >
          {props.content}
        </p>
      </section>

      <input
        type="checkbox"
        className="title-large"
        checked={isFilterActive}
        onChange={handleFilter}
      />
    </li>
  );
}
