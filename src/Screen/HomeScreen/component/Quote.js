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
              " The creativity and talent of the Gleam team was amazing. Pro in
              hinc exerci gloriatur, ius ut agam consectetuer, quo te euismod
              corrumpit. "
            </QuoteTitle>
            <Author>Anna Jones - Bride</Author>
          </WrapperQuote>
        </Container>
      </WrapperContent>
    </Wrapper>
  );
}

export default Quote;
