// Function needed for fetching and saving locally heavy data at build time.

import fs from 'fs/promises';

export default async function fetchAndSaveFile(dataUrl, filePath, mapResponseCallback) {
    let response = await fetch(dataUrl);

    let data = mapResponseCallback 
    ? await mapResponseCallback(response)
    : await response.text();

    await fs.writeFile(filePath, data);
}