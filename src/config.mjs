const LANG_TEMPLATE = "{{lang}}";
const DEFAULT_LANGUAGE = "en_us";

const config = {
  APP_NAME: "TFTStats",
  APP_DESCRIPTION: "Utility app for Riot Games Teamfight Tactics video game",
  APP_URL:
    process.env.NODE_ENV === "production"
      ? "https://tftstats.vercel.app"
      : "http://localhost:3000",
  TFT_SET: 8,
  isMidSet: true,
  LANG_TEMPLATE,
  DEFAULT_LANGUAGE,
  CDRAGON_TFT_FILE_URL: `https://raw.communitydragon.org/latest/cdragon/tft/${LANG_TEMPLATE}.json`,
  CDRAGON_TFT_FILENAME: `cdragonTFT.${LANG_TEMPLATE}.json`,
  DATA_DIRECTORY: "public/data",
  CDRAGON_IMAGE_BASE_URL: "https://raw.communitydragon.org/latest/game",
  CHAMPION_IMAGE_DIRECTORY: "public/images/champions",
};

export default config;