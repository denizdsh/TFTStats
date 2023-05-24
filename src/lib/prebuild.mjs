// Function needed for fetching and saving locally heavy data at build time.

import path from "path";
import { mkdir } from "fs/promises";

import { fetchAndSaveFile, fetchAndSaveImage } from "./fetchAndSaveFile.mjs";
import config from "../config.mjs";
import { championNameInvalidCharacters } from "./patterns.mjs";

// Script-running IIFE with middleware-like pattern (context)
(async () => {
  const context = {};

  await preloadTFTData(context);
  preloadChampionImages(context);
})();

// TFT Champion data file
async function preloadTFTData(context) {
  await initDirectory(config.DATA_DIRECTORY);

  const dataUrl = config.CDRAGON_TFT_FILE_URL.replace(
    config.LANG_TEMPLATE,
    config.DEFAULT_LANGUAGE
  );

  const fileName = config.CDRAGON_TFT_FILENAME.replace(
    config.LANG_TEMPLATE,
    config.DEFAULT_LANGUAGE
  );

  const filePath = path.join(process.cwd(), config.DATA_DIRECTORY, fileName);

  console.log(`Fetching file from ${dataUrl}...`);

  await fetchAndSaveFile(
    dataUrl,
    filePath,
    applyContext(context, mapTFTDataResponse)
  );
  console.log(`File saved to ${filePath}.`);
}

async function mapTFTDataResponse(res) {
  res = await res.json();
  res = res.sets[config.TFT_SET];

  if (this && this.context) {
    this.context.tftData = res;
  }

  return JSON.stringify(res);
}

// TFT Champion images
async function preloadChampionImages(context) {
  await initDirectory(config.CHAMPION_IMAGE_DIRECTORY);

  const getFilePath = (filename) =>
    path.join(process.cwd(), config.CHAMPION_IMAGE_DIRECTORY, filename);

  const mapToImageStream = async (champ) => {
    const imageURL =
      config.CDRAGON_IMAGE_BASE_URL +
      "/" +
      champ.icon.toLocaleLowerCase().replace(".dds", ".png");

    const filename =
      champ.name
        .replaceAll(championNameInvalidCharacters, "")
        .toLocaleLowerCase() + ".png";

    return fetchAndSaveImage(imageURL, getFilePath(filename));
  };

  Promise.all(context.tftData.champions.map(mapToImageStream))
    .then(() => {
      console.log("Champion images downloaded");
    })
    .catch((err) => {
      throw new Error(err);
    });
}

// helper functions
async function initDirectory(directory) {
  // create needed directory, since empty folders are not uplaoded in the repository => deployment bug

  const directoryPath = path.join(process.cwd(), directory);
  await mkdir(directoryPath, { recursive: true });
}

function applyContext(context, fn) {
  return fn.bind({ context });
}
