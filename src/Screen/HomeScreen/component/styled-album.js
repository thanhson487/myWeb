import styled from "styled-components";
import { Typography } from "@material-ui/core";
export const CustomtypoTitle = styled(Typography)`
  color: #151515 !important;
  font-size: 24px !important;
  font-weight: 700 !important;
  letter-spacing: 0.03em !important;
  font-family: Cormorant, sans-serif !important;
  margin-top: 20px !important;
`;
export const CustomtypoContent = styled(Typography)`
  color: #858585 !important;
  box-shadow: none !important;
  text-decoration: none !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.03em !important;
  margin-top: 10px !important;
  margin-bottom: 20px !important;
`;
export const CustomWrapper = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    display: flex;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const WrapperContent = styled.div`
  width: 80%;
`;
export const Overlay = styled.div`
  display: none;
  background-color: black;
  opacity: 0.1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
export const CustomImage = styled.img``;
export const WrapperImage = styled.div`
  position: relative;
  overflow: hidden;
  &:hover {
    ${Overlay} {
      display: inline-block;
      z-index: 99;
      transition: all 0.5s ease;
    }
    ${CustomImage} {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }
`;
