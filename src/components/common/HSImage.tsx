import { styled } from "styled-components";

type HSImageSize =
  | ["24px", "24px"]
  | ["40px", "40px"]
  | ["90px", "50px"]
  | ["100%", "100%"];

type HSImageFit = "fill" | "contain" | "cover" | "none";

interface HSImageProps {
  imageSize: HSImageSize;
  imgaeFit?: HSImageFit;
  isRound?: boolean;
  opacity?: number;
}

const HSImage = styled.img<HSImageProps>`
  width: ${(props) => props.imageSize[0]};
  height: ${(props) => props.imageSize[1]};
  object-fit: ${(props) => (props.imgaeFit ? props.imgaeFit : "fill")};
  border-radius: ${(props) => (props.isRound ? `10px` : `0`)};
  opacity: ${(props) => (props.opacity ? props.opacity : "1.0")};
`;

export default HSImage;
