import styled from "styled-components";

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 87px;
  left: 50%;
  transform: translateX(-50%);
  background: #505052;
  color: #fbfbfc;
  padding: 9px 14px;
  border-radius: 36px;
  font-size: 12px;
  font-weight: normal;

  transition: all 0.3s ease-in-out;

  will-change: opacity, visibility;

  &.hide {
    opacity: 0;
    visibility: hidden;
  }
  &.visible {
    opacity: 1;
    visibility: visible;
  }
`;
