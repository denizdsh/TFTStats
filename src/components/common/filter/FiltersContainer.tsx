import { PropsWithChildren } from "react";

export default function FiltersContainer(
  props: PropsWithChildren & { className?: string }
) {
  return (
    <ul
      className={`border-l-2 border-primary-container pl-4 ${
        props.className || ""
      }`}
    >
      {props.children}
    </ul>
  );
}
