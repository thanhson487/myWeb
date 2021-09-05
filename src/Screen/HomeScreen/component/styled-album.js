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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
