import { horsemanImages } from "@/resources/constants";

const getHorseManImage = (horseManNo: number) => {
  return `${horsemanImages}${(horseManNo % 64) + 1}.png`;
};

export { getHorseManImage };
