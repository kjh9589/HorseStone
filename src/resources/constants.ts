const NUM_OF_ROWS = 10;
const RESPONSE_TYPE = "json";

const backgroundUrl = "/assets/background/";
const backgroundImages = {
  backgroundRating: `${backgroundUrl}background_rating.svg`,
  backgroundLanding: `${backgroundUrl}background_lading.jpeg`,
  backgroundNotFound: `${backgroundUrl}background_not_found.jpeg`,
  backgroundError: `${backgroundUrl}background_error.jpg`,
};

const decorationUrl = "/assets/decoration/";
const decorationImages = {
  decorationTitleBanner: `${decorationUrl}title_banner.jpeg`,
  decorationDescriptionBanner: `${decorationUrl}description_banner.jpeg`,
  decorationHorseBanner: `${decorationUrl}horse_banner.png`,
  decorationHorseManBanner: `${decorationUrl}horseman_banner.png`,
  decorationTrainerBanner: `${decorationUrl}trainer_banner.png`,
};

const lottieUrl = "/public/assets/lottie/";
const lottieFiles = {
  lottieLoading: `${lottieUrl}lottie_loading.json`,
};

const logoImage = "/assets/HorseStone.png";

const horseImages = "/assets/horses/";

export {
  NUM_OF_ROWS,
  RESPONSE_TYPE,
  backgroundImages,
  decorationImages,
  horseImages,
  logoImage,
  lottieFiles,
};
