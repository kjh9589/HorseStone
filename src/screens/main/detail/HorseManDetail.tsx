import { useAppSelector } from "@/hooks/storeHooks";
import colors from "@/resources/colors";
import { iconFiles } from "@/resources/constants";
import HSCard from "@components/card/HSCard";
import HSImage from "@components/common/HSImage";
import { styled } from "styled-components";

const HorseManDetailWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.white};
`
const PrevButton = styled(HSImage)`
  position: absolute;
  top: 50%;
  left: 4px;
`

const NextButton = styled(HSImage)`
  position: absolute;
  top: 50%;
  right: 4px;
`

const HorseManDetail = () => {
  const horseManDetailInfo = useAppSelector((state) => state.modalDetail);

  return <HorseManDetailWrapper>
    <PrevButton imageSize={["40px", "40px"]} src={iconFiles.arrowLeft}/>
    <NextButton imageSize={["40px", "40px"]} src={iconFiles.arrowRight}/>
    
  </HorseManDetailWrapper>
}

export default HorseManDetail;