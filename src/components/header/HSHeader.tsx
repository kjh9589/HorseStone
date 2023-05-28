import colors from "@/resources/colors";
import { logoImage } from "@/resources/constants";
import HSImage from "@components/common/HSImage";
import HSSpaceBox from "@components/common/HSSpaceBox";
import HSText from "@components/common/HSText";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HSHeaderWrapper = styled.div`
  display: flex;
  height: 70px;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  padding: 4px;
  align-items: center;
  cursor: pointer;
  background-color: ${colors.main};
`;

const HSHeaderLink = styled(Link)`
  text-decoration: none;
`
const HSHeader = () => {
  return (
    <HSHeaderLink to="/main">
      <HSHeaderWrapper>
        <HSImage src={logoImage} imageSize={["70px", "70px"]} isRound={true} />
        <HSSpaceBox left={10}>
          <HSText textSize="24px" textColor={colors.white} textWeight="700">
            HorseStone
          </HSText>
        </HSSpaceBox>
      </HSHeaderWrapper>
    </HSHeaderLink>
  );
};

export default HSHeader;
