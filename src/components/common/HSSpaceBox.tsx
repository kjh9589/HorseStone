import React from "react";
import { styled } from "styled-components";

interface HSSpaceProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}
const HSSpaceBoxWrapper = styled.div<HSSpaceProps>`
  display: inline-block;
  padding: ${(props) =>
    `${props.top}px ${props.right}px ${props.bottom}px ${props.left}px`};
`;

const HSSpaceBox = ({top=0, right=0, bottom=0, left=0, children}: HSSpaceProps & {children: React.ReactNode}) => {
  return (
    <HSSpaceBoxWrapper
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {children}
    </HSSpaceBoxWrapper>
  );
};

export default HSSpaceBox;
