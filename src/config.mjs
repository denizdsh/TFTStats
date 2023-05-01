const LANG_TEMPLATE = '{lang}';
const CDRAGON_TFT_DEFAULT_LANGUAGE = 'en_us';

const config = {
    TFT_SET: 8,
    LANG_TEMPLATE,
    CDRAGON_TFT_DEFAULT_LANGUAGE,
    CDRAGON_TFT_FILE_URL: `https://raw.communitydragon.org/latest/cdragon/tft/${CDRAGON_TFT_DEFAULT_LANGUAGE}.json`,
    CDRAGON_TFT_FILENAME: `cdragonTFT.${LANG_TEMPLATE}.json`,
    DATA_DIRECTORY: 'public/data' 
}

export default config;