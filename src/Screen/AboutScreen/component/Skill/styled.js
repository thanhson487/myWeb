import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  @media (max-width: 760px) {
  }
`;
export const WrapperContent = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 108px 0px 108px 0px;
  grid-gap: 40px;
  @media (max-width: 760px) {
    width: 100%;
    padding: 108px 10px 108px 10px;
    grid-template-columns: 1fr;
  }
`;
export const WrapperSkillLeft = styled.div``;
export const WrapperSkillOne = styled.div`
  margin-bottom: 40px;
  &:nth-child(3) {
    margin-bottom: 0px;
  }
`;
export const Title = styled.div`
  color: #252525;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;
export const SkillFull = styled.div`
  background-color: #d6d6d6;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  position: relative;
`;
export const SkillEx = styled.div`
  display: flex;
  width: ${(props) => props.width}%;
  background-color: #8bb8c1;
  height: 15px;
  line-height: 15px;
  color: #252525;
`;
export const WrapperSkillRight = styled.div``;
export const CustomSpan = styled.span`
  flex-grow: 1;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 15px;
`;
export const CustomSpan2 = styled.span`
  padding-right: 15px;
  line-height: 15px;
  color: #252525;
`;
export const CustomH2 = styled.h2`
  font-weight: 700 !important;
  font-size: 48px;

  line-height: 1.2em;
  @media (max-width: 760px) {
    font-size: 32px;
  }
`;
export const Content = styled.div`
  line-height: 1.7;
  color: #858585;
  font-size: 16px;
  font-weight: 400;
`;
