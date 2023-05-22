import { PropsWithChildren } from "react";

export default function ChampionsContainer(props: PropsWithChildren) {
  return (
    <ul className="flex flex-wrap justify-center gap-5 max-sm:gap-3">
      {props.children}
    </ul>
  );
}
