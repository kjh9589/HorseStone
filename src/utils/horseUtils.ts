import { horseImages } from "@/resources/constants";

const getHorseImage = () => {
  const horseRand = Math.floor(Math.random() * 65) + 1;
  return `${horseImages}${horseRand}.png`;
};

export { getHorseImage };
