import colors from "@/resources/colors";
import { backgroundImages, logoImage } from "@/resources/constants";
import HSImage from "@components/common/HSImage";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LadingWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
const LadingBox = styled.div`
  position: absolute;
  width: 30vw;
  height: 30vh;
  border-radius: 10px;
  background-color: ${colors.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  cursor: pointer;
`;

const LandingScreen = () => {
  return (
    <LadingWrapper>
      <HSImage
        src={backgroundImages.backgroundLanding}
        imageSize={["100%", "100%"]}
        imgaeFit="cover"
      />
      <Link to="/horseScreen">
        <LadingBox>
          <HSImage src={logoImage} imageSize={["100%", "100%"]} />
        </LadingBox>
      </Link>
    </LadingWrapper>
  );
};

export default LandingScreen;
