import React from "react";
import {
  CustomContent,
  CustomImage,
  CustomLink,
  Overlay,
  Title,
  TitleDr,
  Wrapper,
  WrapperBlog,
  WrapperBlogContainer,
  WrapperContent,
  WrapperContent2,
  WrapperDr,
  WrapperImage,CustomFlexItem
} from "./styled-blog";

import img3 from "./../../../img/home/backgroud-concept.jpg";
import img2 from "./../../../img/home/backgroud-event.jpg";
import img1 from "./../../../img/home/backgroud-psc.jpg";
function Blog(props) {
  return (
    <>
      <Wrapper>
        <WrapperContent>
          <Title>Dịch vụ của Cam Production</Title>
        </WrapperContent>
      </Wrapper>
      <Wrapper>
        <WrapperBlogContainer>
          <WrapperBlog>
            <CustomFlexItem>
              <WrapperImage>
                <Overlay />
                <CustomImage src={img1} />
              </WrapperImage>
              <WrapperDr>
                <TitleDr>Phóng sự cưới</TitleDr>
                <WrapperContent2>
                  <CustomContent>
                    Hạnh phúc trong ngày trọng đại nhất đời mình
                  </CustomContent>
                </WrapperContent2>
              </WrapperDr>
            </CustomFlexItem>

            <CustomFlexItem>
              <CustomLink to="/su-kien">
                <WrapperImage>
                  <Overlay />
                  <CustomImage src={img2} />
                </WrapperImage>
              </CustomLink>

              <WrapperDr>
                <CustomLink to="/su-kien">
                  <TitleDr>Sự kiện</TitleDr>
                </CustomLink>

                <WrapperContent2>
                  <CustomContent>
                    Ánh sáng, âm nhạc và những bức hình không thể thiếu cho các
                    sự kiện hoành tráng
                  </CustomContent>
                </WrapperContent2>
              </WrapperDr>
            </CustomFlexItem>

            <CustomFlexItem>
              <CustomLink to="/concept">
                <WrapperImage>
                  <Overlay />
                  <CustomImage src={img3} />
                </WrapperImage>
              </CustomLink>

              <WrapperDr>
                <CustomLink to="/concept">
                  <TitleDr>Concept</TitleDr>
                </CustomLink>
                <WrapperContent2>
                  <CustomContent>
                    Một thời hồn nhiên, mơ mộng, vu vơ… nào có lần thứ hai?
                  </CustomContent>
                </WrapperContent2>
              </WrapperDr>
            </CustomFlexItem>
          </WrapperBlog>
        </WrapperBlogContainer>
      </Wrapper>
    </>
  );
}

export default Blog;
