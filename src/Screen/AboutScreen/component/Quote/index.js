import React from "react";
import {
  Author,
  CustomImage,
  OverLay,
  QuoteTitle,
  Wrapper,
  WrapperAuthor,
  WrapperContainer,
  WrapperContent,
  WrapperImage,
  WrapperQuote,
  WrapperAuthor2,CustomP
} from "./styled-quote";
function Quote(props) {
  return (
    <Wrapper>
      <WrapperContent>
        <OverLay />
        <WrapperQuote>
          <WrapperContainer>
            <QuoteTitle>
              " The creativity and talent of the Gleam team was amazing. Pro in
              hinc exerci gloriatur, ius ut agam consectetuer, quo te euismod
              corrumpit. "
            </QuoteTitle>
            <WrapperAuthor>
              <WrapperImage>
                <CustomImage
                  alt="avatar"
                  src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/105770261_2679749088964652_2660893414842559459_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JUDTZvFfRbQAX9kKNpa&_nc_ht=scontent.fhan14-1.fna&oh=c09b0ce6d6d52dc64690afbf54e97801&oe=6161EBDC"
                />
              </WrapperImage>
              <WrapperAuthor2>
                <Author>Thanh Sơn</Author>
                <CustomP>Photographer</CustomP>
              </WrapperAuthor2>
            </WrapperAuthor>
          </WrapperContainer>
          <WrapperContainer>
            <QuoteTitle>
              " The creativity and talent of the Gleam team was amazing. Pro in
              hinc exerci gloriatur, ius ut agam consectetuer, quo te euismod
              corrumpit. "
            </QuoteTitle>
            <WrapperAuthor>
              <WrapperImage>
                <CustomImage
                  alt="avatar"
                  src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/105770261_2679749088964652_2660893414842559459_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JUDTZvFfRbQAX9kKNpa&_nc_ht=scontent.fhan14-1.fna&oh=c09b0ce6d6d52dc64690afbf54e97801&oe=6161EBDC"
                />
              </WrapperImage>
              <Author>Thanh Sơn</Author>
            </WrapperAuthor>
          </WrapperContainer>
        </WrapperQuote>
      </WrapperContent>
    </Wrapper>
  );
}

export default Quote;
