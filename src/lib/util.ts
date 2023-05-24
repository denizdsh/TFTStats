import { sync } from "glob";
import { readFile } from "fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function getImages(
  pattern: string
): Promise<IPlaiceholderImage[]> {
  return Promise.all(
    sync(pattern).map(async (file) => {
      const src = file.replace("./public", "");
      const buffer = await readFile(file);

      const plaiceholder = await getPlaiceholder(buffer);

      return { ...plaiceholder, img: { src } };
    })
  );
}

export async function getImage(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const plaiceholder = await getPlaiceholder(buffer, { size: 10 });

  return { ...plaiceholder, img: { src } };
}

export type IPlaiceholderImage = Awaited<ReturnType<typeof getImage>>;
