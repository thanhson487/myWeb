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
            <ContentLeft>Welcome to CAM PRODUCTION</ContentLeft>
            <ContentLeftDr>
              <b>CAM PRODUCTION</b> gồm những thợ ảnh chuyên nghiệp và tận tâm
              nhất mà bạn từng biết đến. Chúng tôi yêu nghệ thuật, yêu những bức
              ảnh và thước phim.
              <br /> <b>CAM PRODUCTION</b> mong muốn lưu giữ giúp bạn những phút
              giây đáng nhớ của cuộc đời!
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
            <SkillTitile>Chụp ảnh</SkillTitile>
            <SkillDr>Lưu lại khoảnh khắc đáng nhớ</SkillDr>
          </WrapperSkill>
          <WrapperSkill>
            <CustomIcon>
              <i aria-hidden="true" class="fas fa-video"></i>
            </CustomIcon>
            <SkillTitile>Quay phim</SkillTitile>
            <SkillDr>Ghi lại những thước phim tuyệt vời</SkillDr>
          </WrapperSkill>
          <WrapperSkill>
            <CustomIcon>
              <i aria-hidden="true" class="fas fa-paint-brush"></i>
            </CustomIcon>
            <SkillTitile>Chỉnh sửa ảnh, video</SkillTitile>
            <SkillDr>Ảnh và video của bạn sẽ hấp dẫn hơn hiện tại đấy!</SkillDr>
          </WrapperSkill>
        </WrapperSkills>
      </WrapperContent>
    </Wrapper>
  );
}

export default Description;
