import { backgroundImages } from "@/resources/constants";
import HSImage from "@components/common/HSImage";
import { styled } from "styled-components";

const ErrorScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const ErrorScreen = () => {
  return (
    <ErrorScreenWrapper>
      <HSImage
        src={backgroundImages.backgroundError}
        imageSize={["100%", "100%"]}
      />
    </ErrorScreenWrapper>
  );
};

export default ErrorScreen;
