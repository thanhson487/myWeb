import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(https://matchthemes.com/demowp/gleam/wp-content/uploads/blog-9.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
export const WrapperContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperQuote = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 200px;
  grid-gap: 20px;
  padding-bottom: 200px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    padding-top: 100px;
    padding-bottom: 100px;
    grid-gap: 0px;
  }
`;
export const QuoteTitle = styled.p`
  color: #ffffff;
  font-family: "Cormorant", Sans-serif;
  font-size: 24px;
  font-style: italic;

  font-weight: 400;
  line-height: 1.5;
  @media (max-width: 760px) {
    font-size: 25px;
  }
`;
export const Author = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-family: Cormorant, sans-serif;
  text-transform: uppercase;
  line-height: 1.2em;
  text-align: center;
  font-size: 16px;
  margin-bottom: 5px;
  @media (max-width: 760px) {
    font-size: 14px;
  }
`;
export const OverLay = styled.div`
  background-color: #000000;
  opacity: 0.4;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
export const WrapperContainer = styled.div`
@media (max-width: 760px) {
    &:nth-child(2) {
      margin-top: 80px;
    }
  }
`;
export const WrapperAuthor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const WrapperImage = styled.div`
  margin-right: 20px;
`;
export const CustomImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  max-width: none;
  border-radius: 50%;
  box-shadow: none;
`;
export const WrapperAuthor2 = styled.div`

`
export const CustomP = styled.p`
color: #ffffff;
font-style: italic;
`
