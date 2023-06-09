import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";

export const baseLinks = [
  {
    title: "Champions",
    link: "/champions",
  },
  {
    title: "Summoners",
    link: "/summoners",
  },
  {
    title: "Playground",
    link: "/playground",
  },
];

interface IBaseNavProps {
  orientation: "row" | "col";
  hideOn: "max-md" | "md";
  containerClassName?: string;
  linkClassName?: string;
  links: { link: string; title: string }[];
  onLinkClick?: MouseEventHandler;
}

export default function BaseNav(props: IBaseNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`${
        props.hideOn === "md" ? "md:hidden" : "max-md:hidden"
      } col-span-2`}
    >
      <ul
        className={`flex list-none ${
          props.orientation === "col" ? "flex-col" : ""
        } gap-10 md:max-lg:gap-5 ${props.containerClassName || ""}`}
      >
        {props.links.map((l) => (
          <li key={l.link} className="title-medium">
            <Link
              href={l.link}
              onClick={props.onLinkClick}
              className={`transition-colors hover:text-secondary focus:text-tertiary80 active:text-tertiary80 ${
                pathname?.startsWith(l.link) ? "text-tertiary" : ""
              } ${props.linkClassName || ""}`}
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
