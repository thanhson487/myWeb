import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const WrapperContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 90px 0px 90px 0px;
  @media (max-width: 760px) {
    width: 80%;
  }
`;
export const Content = styled.div`
font-size: 48px;   font-family: 'Lobster', cursive;
font-family: 'Old Standard TT', serif;
color: #151515;
    font-weight: 700;
    line-height: 1.5;

`
export const ContentDr =styled.div`
color: #858585;
    font-size: 16px;
    font-weight: 400;;
    line-height: 1.7;

`