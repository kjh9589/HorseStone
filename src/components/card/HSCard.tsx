import { backgroundImages, decorationImages } from "@/resources/constants";
import HSImage from "@components/common/HSImage";
import { styled } from "styled-components";
import colors from "@/resources/colors";
import HSText from "@components/common/HSText";

type HSCardSize = ["240px", "388px"] | ["355px", "574px"];

interface HSCardBackgroundProps {
  cardSize: HSCardSize;
}

interface HSCardProps {
  cardType: "DEFALT" | "LARGE";
  imageUri: string;
  title: string;
  description: Array<string>;
  rating: string;
}

interface HSCardDescriptionProps {
  space: number;
}

const HSCardWrapper = styled.div`
  position: relative;
  background-color: ${colors.subColor};
  display: inline-block;
  transition: transform 0.3s ease;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const HSCardRatingWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`;

const HSCardRating = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HSCardBackground = styled.div<HSCardBackgroundProps>`
  width: ${(props) => props.cardSize[0]};
  height: ${(props) => props.cardSize[1]};
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
`;

const HSCardImage = styled.div`
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  height: 60%;
`;

const HSCardTitleWrapper = styled.div`
  height: 10%;
  position: relative;
`;

const HSCardTitle = styled(HSText)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HSCardDescriptionWrapper = styled.div`
  height: 30%;
  border-radius: 0 0 10px 10px;
  position: relative;
  overflow: hidden;
  padding: 1px;
  background-color: ${colors.black};
`;

const HSCardDescriptionSection = styled.div`
  position: absolute;
  width: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: inherit;
  line-height: 20px;
`;

const HSCard = (props: HSCardProps) => {
  const generateDescriptions = () => {
    const descriptions: Array<React.ReactNode> = [];
    props.description.forEach((value, index) => {
      descriptions.push(
        <HSText
          key={index}
          textColor={colors.white}
          textWeight="500"
          textSize="14px"
        >
          {value}
        </HSText>
      );
    });
    return descriptions;
  };
  return (
    <HSCardWrapper>
      <HSCardBackground
        cardSize={
          props.cardType === "DEFALT" ? ["240px", "388px"] : ["355px", "574px"]
        }
      >
        <HSCardImage>
          <HSImage
            src={props.imageUri}
            imageSize={["100%", "100%"]}
            imgaeFit="cover"
          />
        </HSCardImage>
        <HSCardTitleWrapper>
          <HSImage
            src={decorationImages.decorationTitleBanner}
            imageSize={["100%", "100%"]}
            imgaeFit="cover"
            opacity={0.8}
          />
          <HSCardTitle textColor={colors.white} textWeight="700">
            {props.title}
          </HSCardTitle>
        </HSCardTitleWrapper>
        <HSCardDescriptionWrapper>
          <HSImage
            src={decorationImages.decorationDescriptionBanner}
            imageSize={["100%", "100%"]}
            imgaeFit="cover"
            isRound={true}
            opacity={0.8}
          />
          <HSCardDescriptionSection>
            {generateDescriptions()}
          </HSCardDescriptionSection>
        </HSCardDescriptionWrapper>
      </HSCardBackground>
      <HSCardRatingWrapper>
        <HSImage
          src={backgroundImages.backgroundRating}
          imageSize={["40px", "40px"]}
        />
        <HSCardRating>
          <HSText textWeight="700">{props.rating}</HSText>
        </HSCardRating>
      </HSCardRatingWrapper>
    </HSCardWrapper>
  );
};

export default HSCard;
