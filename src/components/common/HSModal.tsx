import { setIsOpened } from "@/store/modalSlice";
import store from "@/store/storeConfig";
import React from "react";
import { styled } from "styled-components";

interface HSModalProps {
  children?: React.ReactNode;
}

const HSModalWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 999;
`;

const HSModalInner = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const HSModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
`;

const HSModal = (props: HSModalProps) => {
  const setOnClickListener = () => {
    store.dispatch(setIsOpened(false));
  };

  // 자식 요소에서 발생한 이벤트가 부모 요소로 전파(이벤트 버블링)를 막기 위한 코드
  const stopProgagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <HSModalWrapper>
      <HSModalInner onClick={setOnClickListener}>
        <HSModalContent onClick={stopProgagation}>
          {props.children}
        </HSModalContent>
      </HSModalInner>
    </HSModalWrapper>
  );
};

export default HSModal;
