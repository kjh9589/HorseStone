import { backgroundImages } from "@/resources/constants";
import HSImage from "@components/common/HSImage";
import React from "react";
import { styled } from "styled-components";

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const NotFound = () => {
  return (
    <NotFoundWrapper>
      <HSImage
        src={backgroundImages.backgroundNotFound}
        imageSize={["100%", "100%"]}
      />
    </NotFoundWrapper>
  );
};

export default NotFound;
