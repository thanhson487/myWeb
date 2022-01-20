import React from "react";
import {
  Wrapper,
  WrapperContent,
  Title,
  WrapperBlog,
  WrapperBlogContainer,
  CustomImage,
  WrapperDr,
  TitleDr,
  TitleDr2,
  WrapperContent2,
  CustomContent,
  CustomItem,
  WrapperImage,
  Overlay,
} from "./styled-blog";
import img1 from "./../../../img/home/backgroud-psc.jpg";
import img2 from "./../../../img/home/backgroud-event.jpg";
import img3 from "./../../../img/home/backgroud-concept.jpg";
function Blog(props) {
  return (
    <>
      <Wrapper>
        <WrapperContent>
          <Title>Bạn muốn chụp gì?</Title>
        </WrapperContent>
      </Wrapper>
      <Wrapper>
        <WrapperBlogContainer>
          <WrapperBlog>
            <div>
              <WrapperImage>
                <Overlay />
                <CustomImage src={img1} />
              </WrapperImage>
              <WrapperDr>
                <TitleDr>Phóng sự cưới</TitleDr>
                {/* <div style={{ display: "flex", marginBottom: "15px" }}>
                  <TitleDr2>MARCH 10</TitleDr2>
                  <CustomItem
                    className="fas fa-wifi-1"
                    style={{ color: "#8bb8c1" }}
                  />
                  <TitleDr2> 2021 NEWS PORTRAITS</TitleDr2>
                </div> */}
                <WrapperContent2>
                  <CustomContent>
                  Hạnh phúc trong ngày trọng đại nhất đời mình 
                  </CustomContent>
                </WrapperContent2>
              </WrapperDr>
            </div>

            <div>
              <WrapperImage>
                <Overlay />
                <CustomImage src={img2} />
              </WrapperImage>

              <WrapperDr>
                <TitleDr>Sự kiện</TitleDr>
                {/* <div style={{ display: "flex", marginBottom: "15px" }}>
                  <TitleDr2>MARCH 10</TitleDr2>
                  <CustomItem
                    className="fas fa-wifi-1"
                    style={{ color: "#8bb8c1" }}
                  />
                  <TitleDr2> 2021 NEWS PORTRAITS</TitleDr2>
                </div> */}
                <WrapperContent2>
                  <CustomContent>
                  Ánh sáng, âm nhạc và những bức hình không thể thiếu cho các sự kiện hoành tráng
                  </CustomContent>
                </WrapperContent2>
              </WrapperDr>
            </div>

            <div>
              <WrapperImage>
                <Overlay />
                <CustomImage src={img3} />
              </WrapperImage>
              <WrapperDr>
                <TitleDr>Concept</TitleDr>
                {/* <div style={{ display: "flex", marginBottom: "15px" }}>
                  <TitleDr2>MARCH 10</TitleDr2>
                  <CustomItem
                    className="fas fa-wifi-1"
                    style={{ color: "#8bb8c1" }}
                  />
                  <TitleDr2> 2021 NEWS PORTRAITS</TitleDr2>
                </div> */}
                <WrapperContent2>
                  <CustomContent>
                  Một thời hồn nhiên, mơ mộng, vu vơ… nào có lần thứ hai?
                  </CustomContent>
                </WrapperContent2>
              </WrapperDr>
            </div>
          </WrapperBlog>
        </WrapperBlogContainer>
      </Wrapper>
    </>
  );
}

export default Blog;
