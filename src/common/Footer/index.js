import React from "react";
import {
  Wrapper,
  WrapperContent,
  WrapperCol,
  ColTitle,
  ColContent,
  Author,
} from "./styled";

const Footer = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <WrapperCol>
          <ColTitle>Về chúng tôi</ColTitle>
          <ColContent>
            CAM PRODUCTION – Capture your best memories!
            <br />
            Với hơn 7 năm kinh nghiệm trong lĩnh vực quay phim chụp ảnh, quay
            phim, CAM PRODUCTION cam kết mang đến cho quý khách hàng dịch vụ
            chuyên nghiệp và những bức ảnh chân thực nhất!
          </ColContent>
        </WrapperCol>

        <WrapperCol>
          <ColTitle>Liên hệ</ColTitle>
          <ColContent padding={20}>
            <p>CS 1: Ngõ 250 Tân Mai, Hoàng Mai, Hà Nội </p>
            CS 2: Nam Thanh, Nam Trực, Nam Định
          </ColContent>

          <ColContent padding={10}>SDT: 096 284 1055 </ColContent>
          <ColContent>son.phamthanh97@gmail.com</ColContent>
        </WrapperCol>
        <WrapperCol>
          <ColTitle>Fanpage</ColTitle>
          <div
            class="fb-page"
            data-href="https://www.facebook.com/camproduction.me"
            data-width="380"
            data-hide-cover="false"
            data-show-facepile="false"
          ></div>
        </WrapperCol>
      </WrapperContent>
      <Author>2021 ©. Designed by SonPham</Author>
    </Wrapper>
  );
};

export default Footer;
