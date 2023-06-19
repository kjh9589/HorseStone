import { backgroundImages } from "@/resources/constants";
import HSImage from "@components/common/HSImage";
import { styled } from "styled-components";

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const NotFoundScreen = () => {
  return (
    <NotFoundWrapper>
      <HSImage
        src={backgroundImages.backgroundNotFound}
        imageSize={["100%", "100%"]}
      />
    </NotFoundWrapper>
  );
};

export default NotFoundScreen;
