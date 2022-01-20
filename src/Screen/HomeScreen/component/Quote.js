import React from "react";
import {
  Wrapper,
  WrapperContent,
  Container,
  WrapperQuote,
  QuoteTitle,Author,OverLay
} from "./styled-quote";
function Quote(props) {
  return (
    <Wrapper>
      <WrapperContent>
        <Container>
          <OverLay />
          <WrapperQuote>
            <QuoteTitle class="elementor-heading-title elementor-size-default">
              "Chỉ có những kỷ niệm là mãi không phai mờ."
            </QuoteTitle>
            <Author>Thanh Sơn - Photographer</Author>
          </WrapperQuote>
        </Container>
      </WrapperContent>
    </Wrapper>
  );
}

export default Quote;
