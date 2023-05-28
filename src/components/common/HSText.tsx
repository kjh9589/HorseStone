import styled from "styled-components";

type HSTextSize = "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px";
type HSTextWeight = "400" | "500" | "700";

interface HSTextProps {
  textSize?: HSTextSize;
  textColor?: string;
  textWeight?: HSTextWeight;
}

const HSText = styled.div<HSTextProps>`
  font-family: "Nanum Gothic", sans-serif;
  font-size: ${(props) => (props.textSize ? props.textSize : "12px")};
  color: ${(props) => (props.textColor ? props.textColor : "#000000")};
  font-weight: ${(props) => (props.textWeight ? props.textWeight : "400")};
`;

export type { HSTextProps };
export default HSText;
