import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 760px) {
  }
`;
export const WrapperContent = styled.div`
  width: 80%;
  @media (max-width: 760px) {
    width: 100%;
    padding: 10px;
  }
`;
export const WrapperAbout = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
export const AboutLeft = styled.div`
  flex: 1;
  margin-right: 30px;
  @media (max-width: 760px) {
    margin-right: 0px;
  }
`;
export const ContentLeft = styled.div`
  font-weight: 700;
  font-size: 48px;
 font-family: 'Lobster', cursive;
font-family: 'Old Standard TT', serif;
  color: #151515;
  line-height: 1.2em;
  margin-bottom: 30px;
  @media (max-width: 760px) {
    font-size: 32px;
  }
`;
export const ContentLeftDr = styled.div`
  font-size: 16px;
  line-height: 1.7;
  @media (max-width: 760px) {
    margin-bottom: 50px;
  }
`;

export const AboutRight = styled.div`
  flex: 1;
  margin-left: 30px;
  @media (max-width: 760px) {
    margin-left: 0px;
  }
  img {
    height: auto;
    max-width: 100%;
  }
`;
export const WrapperSkills = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 100px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    margin-top: 70px;
    margin-bottom: 70px;
  }
`;
export const WrapperSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CustomIcon = styled.div`
  font-size: 50px;
  fill: #8bb8c1;
  color: #8bb8c1;
  border-color: #8bb8c1;
`;
export const SkillTitile = styled.div`
 font-family: 'Lobster', cursive;
font-family: 'Old Standard TT', serif;
  color: #151515;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 20px;
`;
export const SkillDr = styled.div`
  text-align: center;
  line-height: 1.9;
  color: #858585;
  font-weight: 400;
`;
