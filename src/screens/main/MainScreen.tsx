import { useAppSelector } from "@/hooks/storeHooks";
import colors from "@/resources/colors";
import { decorationImages, iconFiles } from "@/resources/constants";
import { mainFilterStrings } from "@/resources/strings";
import HSHeader from "@components/header/HSHeader";
import VerticalImageText from "@components/vertical/VerticalImageText";
import React from "react";
import { styled } from "styled-components";
import HorseScreen from "./horse/HorseScreen";
import HorseManScreen from "./horseman/HorseManScreen";
import TrainerScreen from "./trainer/TraninerScreen";
import store from "@/store/storeConfig";
import HSImage from "@components/common/HSImage";
import { setCurrentScreen } from "@/store/screenSlice";
import HSModal from "@components/common/HSModal";
import HorseDetail from "./detail/HorseDetail";
import HorseManDetail from "./detail/HorseManDetail";

const MainScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const MainHeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const MainTopWrapper = styled.div`
  height: 40vh;
  display: flex;
  align-items: end;
  background-color: ${colors.subColor};
  padding: 8px;
  margin-bottom: 8px;
`;

const MainTop = styled.div`
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
`;

const FloatingButton = styled(HSImage)`
  position: fixed;
  bottom: 8px;
  right: 8px;
  z-index: 1;
  cursor: pointer;
`;

const MainScreen = () => {
  const currentScreen = useAppSelector((state) => state.screen.currentScreen);
  const isModalOpened = useAppSelector((state) => state.modal.isOpened);
  const modalType = useAppSelector((state) => state.modalDetail.type);

  const setOnHorseClickListener = () => {
    store.dispatch(setCurrentScreen("horse"));
  };

  const setOnHorseManClickListener = () => {
    store.dispatch(setCurrentScreen("horseman"));
  };

  const setOnFloatingButtonClickListener = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderModal = () => {
    switch (modalType) {
      case "horse":
        return <HorseDetail />;
      case "horseman":
        return <HorseManDetail />;
    }
  };

  const setOnCurrentScreen = () => {
    switch (currentScreen) {
      case "horse":
        return <HorseScreen />;
      case "horseman":
        return <HorseManScreen />;
      case "trainer":
        return <TrainerScreen />;
      default:
        return <HorseScreen />;
    }
  };

  return (
    <MainScreenWrapper>
      {isModalOpened && <HSModal>{renderModal()}</HSModal>}
      <MainHeaderWrapper>
        <HSHeader />
      </MainHeaderWrapper>

      <MainTopWrapper>
        <MainTop>
          <VerticalImageText
            imageUri={decorationImages.decorationHorseBanner}
            imageProps={{ imageSize: ["10vw", "10vw"] }}
            title={mainFilterStrings.horse}
            textProps={{ textSize: "28px", textWeight: "500" }}
            backgroundColor={colors["573D11"]}
            onClick={setOnHorseClickListener}
          />
          <VerticalImageText
            imageUri={decorationImages.decorationHorseManBanner}
            imageProps={{ imageSize: ["10vw", "10vw"] }}
            title={mainFilterStrings.horseMan}
            textProps={{ textSize: "28px", textWeight: "500" }}
            backgroundColor={colors["573D11"]}
            onClick={setOnHorseManClickListener}
          />
        </MainTop>
      </MainTopWrapper>
      {setOnCurrentScreen()}

      <FloatingButton
        src={iconFiles.arrowUp}
        imageSize={["40px", "40px"]}
        isRound={true}
        onClick={setOnFloatingButtonClickListener}
      />
    </MainScreenWrapper>
  );
};

export default MainScreen;
