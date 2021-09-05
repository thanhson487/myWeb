import React from "react";
import {
  Wrapper,
  WrapperContent,
  WrapperAbout,
  AboutLeft,
  ContentLeft,
  ContentLeftDr,
  AboutRight,
  WrapperSkills,
  WrapperSkill,
  CustomIcon,
  SkillTitile,
  SkillDr,
} from "./styled";
import img1 from "./../../../../img/slideshow/img1.jpg";
function Description(props) {
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperAbout>
          <AboutLeft>
            <ContentLeft>Welcome to Cốm Photographer</ContentLeft>
            <ContentLeftDr>
              Lorem ipsum dolor sit amet, pro ei justo mnesarchum, ad partem
              epicurei quo, iusto errem no cum. Idque minim his ut. Ut cum
              legendos similique, quo an tantas aliquip graecis. Nec et consul
              voluptatum, mel ex solum facete consequat. Cu eos lucilius
              gubergren, ad sale definitionem his.
            </ContentLeftDr>
          </AboutLeft>
          <AboutRight>
            <img src={img1} alt="Ảnh About" />
          </AboutRight>
        </WrapperAbout>
        <WrapperSkills>
          <WrapperSkill>
            <CustomIcon>
              <i class="fa fa-camera-retro" aria-hidden="true"></i>
            </CustomIcon>
            <SkillTitile>Photography</SkillTitile>
            <SkillDr>
              onstituto percipitur ius, cu platonem mnesarchum nam. Nostrum
              vituperatoribus mea et, eu duo autem adipisci rationibus, eu nec
              assum aeterno omnesque.
            </SkillDr>
          </WrapperSkill>
          <WrapperSkill>
            <CustomIcon>
            <i aria-hidden="true" class="fas fa-video"></i>
            </CustomIcon>
            <SkillTitile>Video</SkillTitile>
            <SkillDr>
              onstituto percipitur ius, cu platonem mnesarchum nam. Nostrum
              vituperatoribus mea et, eu duo autem adipisci rationibus, eu nec
              assum aeterno omnesque.
            </SkillDr>
          </WrapperSkill>
          <WrapperSkill>
            <CustomIcon>
            <i aria-hidden="true" class="fas fa-paint-brush"></i>
            </CustomIcon>
            <SkillTitile>Editing</SkillTitile>
            <SkillDr>
              onstituto percipitur ius, cu platonem mnesarchum nam. Nostrum
              vituperatoribus mea et, eu duo autem adipisci rationibus, eu nec
              assum aeterno omnesque.
            </SkillDr>
          </WrapperSkill>
        </WrapperSkills>
      </WrapperContent>
    </Wrapper>
  );
}

export default Description;
