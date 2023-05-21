import styled from "styled-components";

type HSTextSize = "12px" | "14px" | "16px" | "18px" | "20px" | "24px" | "28px";

interface HSTextProps {
  textSize?: HSTextSize;
  textColor?: string;
}

const HSText = styled.div<HSTextProps>`
  font-family: "Nanum Gothic", sans-serif;
  font-size: ${(props) => (props.textSize ? props.textSize : "12px")};
  color: ${(props) => (props.textColor ? props.textColor : "#000000")};
`;
export default HSText;
