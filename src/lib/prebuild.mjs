// Function needed for fetching and saving locally heavy data at build time.

import path from 'path';

import fetchAndSaveFile from './fetchAndSaveFile.mjs';
import config from '../config.mjs';

async function mapResponseCallback(res) {
    res = await res.json();
    res = res.sets[config.TFT_SET];

    return JSON.stringify(res);
}

(async () => {
    const dataUrl = config.CDRAGON_TFT_FILE_URL;

    const fileName = config.CDRAGON_TFT_FILENAME
        .replace(
            config.LANG_TEMPLATE,
            config.CDRAGON_TFT_DEFAULT_LANGUAGE);

    const filePath = path.join(process.cwd(), config.DATA_DIRECTORY, fileName);

    console.log(`Fetching file from ${dataUrl}...`);
    await fetchAndSaveFile(dataUrl, filePath, mapResponseCallback);
    console.log(`File saved to ${filePath}.`);
})();