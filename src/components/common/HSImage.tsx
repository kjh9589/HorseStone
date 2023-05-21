import { styled } from "styled-components";

type HSImageSize =
  | ["24px", "24px"]
  | ["40px", "40px"]
  | ["90px", "50px"]
  | ["240px", "388px"]
  | ["355px", "574px"];

interface HSImageProps {
  imageSize: HSImageSize;
}

const HSImage = styled.img<HSImageProps>`
  width: ${(props) => props.imageSize[0]};
  height: ${(props) => props.imageSize[1]};
`;

export default HSImage;
