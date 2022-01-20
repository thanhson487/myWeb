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
        Không chỉ là những bức ảnh, chúng tôi giúp bạn lưu lại những khoảnh khắc ý nghĩa trong cuộc đời!
        </Content>
        <WrapperButton>

          <CustomButton onClick={() => window.open('http://m.me/camproduction.me', '_blank')} >Liên hệ ngay: 0962841055</CustomButton>
        </WrapperButton>
      </WrapperContent>
    </Wrapper>
  );
}

export default ContactUS;
