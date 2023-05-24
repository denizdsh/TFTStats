// Function needed for fetching and saving locally heavy data at build time.

import { createWriteStream } from "fs";
import { writeFile } from "fs/promises";
import { Readable } from "stream";
import { finished } from "stream/promises";

export async function fetchAndSaveFile(dataUrl, filePath, mapResponseCallback) {
  let response = await fetch(dataUrl);

  let data = mapResponseCallback
    ? await mapResponseCallback(response)
    : await response.text();

  writeFile(filePath, data);

  return data;
}

export async function fetchAndSaveImage(
  imageURL,
  filePath,
  { flags = "w" } = {} // If file does not exist -> create one : else replace it
) {
  const res = await fetch(imageURL);
  const fileStream = createWriteStream(filePath, { flags });
  return await finished(Readable.fromWeb(res.body).pipe(fileStream));
}
