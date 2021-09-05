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
          <Title>Read Our Blog</Title>
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
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <TitleDr2>MARCH 10</TitleDr2>
                  <CustomItem
                    className="fas fa-wifi-1"
                    style={{ color: "#8bb8c1" }}
                  />
                  <TitleDr2> 2021 NEWS PORTRAITS</TitleDr2>
                </div>
                <WrapperContent2>
                  <CustomContent>
                    Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus
                    eget consectetur ac. Consectetur adipiscing elit. Vivamus
                    auctor condimentum sem et ..
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
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <TitleDr2>MARCH 10</TitleDr2>
                  <CustomItem
                    className="fas fa-wifi-1"
                    style={{ color: "#8bb8c1" }}
                  />
                  <TitleDr2> 2021 NEWS PORTRAITS</TitleDr2>
                </div>
                <WrapperContent2>
                  <CustomContent>
                    Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus
                    eget consectetur ac. Consectetur adipiscing elit. Vivamus
                    auctor condimentum sem et ..
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
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <TitleDr2>MARCH 10</TitleDr2>
                  <CustomItem
                    className="fas fa-wifi-1"
                    style={{ color: "#8bb8c1" }}
                  />
                  <TitleDr2> 2021 NEWS PORTRAITS</TitleDr2>
                </div>
                <WrapperContent2>
                  <CustomContent>
                    Arnare varius mauris eu commodo. Aenean nibh risus, rhoncus
                    eget consectetur ac. Consectetur adipiscing elit. Vivamus
                    auctor condimentum sem et ..
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
