import { useAppSelector } from "@/hooks/storeHooks";
import colors from "@/resources/colors";
import { decorationImages } from "@/resources/constants";
import { mainFilterStrings } from "@/resources/strings";
import HSHeader from "@components/header/HSHeader";
import VerticalImageText from "@components/vertical/VerticalImageText";
import React from "react";
import { styled } from "styled-components";
import HorseScreen from "./horse/HorseScreen";
import HorseManScreen from "./horseman/HorseManScreen";
import TrainerScreen from "./trainer/TraninerScreen";
import store from "@/store/storeConfig";
import { setCurrentScreen } from "@/store/ScreenSlice";

const MainScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const MainHeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  overflow-x: hidden;
  right: 9px;
`;

const MainTopWrapper = styled.div`
  height: 40vh;
  display: flex;
  align-items: end;
  background-color: ${colors.subColor};
  padding: 20px;
`;

const MainTop = styled.div`
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
`;

const MainScreen = () => {
  const currentScreen = useAppSelector((state) => state.screen.currentScreen);

  const setOnHorseClickListener = () => {
    store.dispatch(setCurrentScreen("horse"));
  };

  const setOnHorseManClickListener = () => {
    store.dispatch(setCurrentScreen("horseman"));
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
    </MainScreenWrapper>
  );
};

export default MainScreen;
