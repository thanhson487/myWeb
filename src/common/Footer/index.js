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
            Với hơn 7 năm kinh nghiệm trong lĩnh vực quay phim chụp ảnh, quay phim, CAM PRODUCTION cam kết mang đến cho quý khách hàng dịch vụ chuyên nghiệp và những bức ảnh chân thực nhất!
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
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThanhsonphotographer&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=252322239528281"
            width="340"
            height="100"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </WrapperCol>
      </WrapperContent>
      <Author>2021 ©. Designed by SonPham</Author>
    </Wrapper>
  );
};

export default Footer;
