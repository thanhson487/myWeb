import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
width: 100%;
  position: relative;
  background-image: url(https://matchthemes.com/demowp/gleam/wp-content/uploads/blog-9.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WrapperQuote = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 200px;
  padding-bottom: 200px;
  @media (max-width: 640px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
export const QuoteTitle = styled.p`
  color: #ffffff;
  font-style: italic;
  line-height: 1.2em;

  font-weight: 700;
  text-align: center;
  font-size: 32px;
  @media (max-width: 640px) {
    font-size: 25px;
  }
`;
export const Author = styled.p`
  color: #ffffff;
  font-weight: 700;

  text-transform: uppercase;
  line-height: 1.2em;
  text-align: center;
  font-size: 16px;
  @media (max-width: 640px) {
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
