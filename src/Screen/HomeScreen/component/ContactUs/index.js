import React from "react";
import {
  Wrapper,
  WrapperContent,
  Content,
  WrapperButton,
  CustomButton,
} from "./styled";

function ContactUS(props) {
  return (
    <Wrapper>
      <WrapperContent>
        <Content>
          We love meeting new people. If you want to work with us send a
          message.
        </Content>
        <WrapperButton>
          <CustomButton>Contact Us</CustomButton>
        </WrapperButton>
      </WrapperContent>
    </Wrapper>
  );
}

export default ContactUS;
