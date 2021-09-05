import React from "react";
import { Wrapper, WrapperContent, Content, ContentDr } from "./styled";
function Banner(props) {
  return (
    <Wrapper>
      <WrapperContent>
        <Content>About Us</Content>
        <ContentDr>WE PLAY WITH LIGHT</ContentDr>
      </WrapperContent>
    </Wrapper>
  );
}

export default Banner;
