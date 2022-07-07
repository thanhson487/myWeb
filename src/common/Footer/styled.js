import styled from "styled-components";
export const Wrapper = styled.div`
  background: #151515;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WrapperContent = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 1030px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;
export const WrapperCol = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-bottom: 100px;
  @media (max-width: 1030px) {
    width: 100%;
    grid-template-columns: 1fr;
    margin-bottom: 0px;
    margin-top: 20px;
    padding: 10px;
  }
`;
export const ColTitle = styled.div`
  line-height: 1.5;

  font-size: 28px;
  letter-spacing: 0.03em;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.03em;
  margin-bottom: 24px;
`;
export const ColContent = styled.div`
  text-align: center;
  color: #eaeaea;
  padding-bottom: ${props =>props.padding}px;
  cursor: pointer;
  line-height: 20px
`;
export const Author = styled.div`
margin-bottom: 20px;
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
`;
