import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #acdae2;
`;
export const WrapperContent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 90px 0px 90px 0px;
  @media (max-width: 760px) {
    width: 80%;
    padding: 72px 0px 72px 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const Content = styled.div`
 font-family: 'Lobster', cursive;
font-family: 'Old Standard TT', serif;
  font-weight: 700;
  font-size: 36px;
  flex: 2;
  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 1.2em;
  }
`;
export const WrapperButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 760px) {
    margin-top: 20px;
  }
  
`;
export const CustomButton = styled.button`
  text-transform: capitalize !important;
  color: #fff;
  background: #151515 !important;
  letter-spacing: 0.03em;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  padding: 12px 24px;
  border-radius: 99em;
  letter-spacing: 0.03em;
  &:hover {
    background: #8bb8c1 !important;
    color: #fff;
  }
`;
