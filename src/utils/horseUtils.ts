import { horseImages } from "@/resources/constants";

const getHorseImage = (horseNo: number) => {
  return `${horseImages}${(horseNo % 64) + 1}.png`
};

export { getHorseImage };
