import Lottie from "lottie-react";
import { styled } from "styled-components";
import LottieLoading from "../../../public/assets/lottie/lottie_loading.json";

const LoadingScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const LottieContainer = styled.div`
  width: 30%;
  height: 30%;
`;

const LoadingScreen = () => {
  return (
    <LoadingScreenWrapper>
      <LottieContainer>
        <Lottie animationData={LottieLoading} loop={true} autoplay={true} />
      </LottieContainer>
    </LoadingScreenWrapper>
  );
};

export default LoadingScreen;
