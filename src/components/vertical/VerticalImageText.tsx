import colors from "@/resources/colors";
import HSImage, { HSImageProps } from "@components/common/HSImage";
import HSSpaceBox from "@components/common/HSSpaceBox";
import HSText, { HSTextProps } from "@components/common/HSText";
import { styled } from "styled-components";

interface VerticalImageTextProps {
  imageUri: string;
  title: string;
  imageProps: HSImageProps;
  textProps: HSTextProps;
  backgroundColor?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const VerticalImageTextWrapper = styled.div<{
  backgroundColor: string | undefined;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  overflow: hidden;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
`;

const VerticalImageText = (props: VerticalImageTextProps) => {
  return (
    <VerticalImageTextWrapper backgroundColor={props.backgroundColor} onClick={props.onClick}>
      <HSImage
        src={props.imageUri}
        imageSize={props.imageProps.imageSize}
        isRound={props.imageProps.isRound}
        imgaeFit={props.imageProps.imgaeFit}
        opacity={props.imageProps.opacity}
      />

      <HSSpaceBox top={10} left={10} right={10} bottom={10}>
        <HSText
          textSize={props.textProps.textSize}
          textColor={props.textProps.textColor}
          textWeight={props.textProps.textWeight}
        >
          {props.title}
        </HSText>
      </HSSpaceBox>
    </VerticalImageTextWrapper>
  );
};

export default VerticalImageText;
