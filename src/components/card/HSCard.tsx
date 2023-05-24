import { backgroundImaes } from "@/resources/constants";
import HSImage from "@components/common/HSImage";
import { styled } from "styled-components";

const HSCardWrapper = styled.div``;

const HSCardRating = styled.div``;

const HSCardBackground = styled.div``;

const HSCard = () => {
  return (
    <HSCardWrapper>
      <HSImage
        imageSize={["24px", "24px"]}
        src={backgroundImaes.backgroundRating}
      />
    </HSCardWrapper>
  );
};

export default HSCard;
