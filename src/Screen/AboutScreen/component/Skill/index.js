import React from "react";
import {
  Wrapper,
  WrapperContent,
  WrapperSkillLeft,
  WrapperSkillOne,
  Title,
  SkillFull,
  SkillEx,
  WrapperSkillRight,
  CustomSpan,
  CustomSpan2,
  CustomH2,
  Content,
} from "./styled";
function Skill(props) {
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperSkillLeft>
          <WrapperSkillOne>
            <Title>LIGHTROOM</Title>
            <SkillFull>
              <SkillEx width={95}>
                <CustomSpan></CustomSpan>
                <CustomSpan2>95%</CustomSpan2>
              </SkillEx>
            </SkillFull>
          </WrapperSkillOne>
          <WrapperSkillOne>
            <Title>PHOTOSHOP</Title>
            <SkillFull>
              <SkillEx width={90}>
                <CustomSpan></CustomSpan>
                <CustomSpan2>90%</CustomSpan2>
              </SkillEx>
            </SkillFull>
          </WrapperSkillOne>
          <WrapperSkillOne>
            <Title>premiere</Title>
            <SkillFull>
              <SkillEx width={90}>
                <CustomSpan></CustomSpan>
                <CustomSpan2>90%</CustomSpan2>
              </SkillEx>
            </SkillFull>
          </WrapperSkillOne>
        </WrapperSkillLeft>
        <WrapperSkillRight>
          <CustomH2>Our Skills</CustomH2>
          <Content>
            as alii illum apeirian te. Eam at decore maiorum. Scaevola
            posidonium nam an. Ad has nihil legimus constituam, soleat sanctus
            adolescens pro ex. Te eius nonumy tritani sit, at omnium vocent
            urbanitas nam, id ius utamur dolorem. No lorem offendit quaestio
            mea. No usu labore menandri pertinax, sea an voluptatum scripserit.
          </Content>
        </WrapperSkillRight>
      </WrapperContent>
    </Wrapper>
  );
}

export default Skill;
