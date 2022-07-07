import React, { useMemo } from "react";
import album1 from "../img/TrendAlbum1";
import album2 from "../img/TrendAlbum2";
import album3 from "../img/TrendAlbum3";
import album4 from "../img/TrendAlbum4";
import album5 from "../img/TrendAlbum5";
import album6 from "../img/TrendAlbum6";
import album7 from "../img/TrendAlbum7";
import album8 from "../img/TrendAlbum8";
import album9 from "../img/TrendAlbum9";
import album10 from "../img/TrendAlbum10";
import album11 from "../img/TrendAlbum11";
import "./style.scss";
import { Wrapper, WrapperContent } from "./styled-album";
import SlideShowItem from "./SlideShowItem";

function Album(props) {
  const listImage1 = [
    album1.img1,
    album1.img2,
    album1.img3,
    album1.img4,
    album1.img5,
    album1.img6,
  ];
  const listImage2 = [
    album2.img1,
    album2.img2,
    album2.img3,
    album2.img4,
    album2.img5,
    album2.img6,
  ];
  const listImage3 = [
    album3.img1,
    album3.img2,
    album3.img3,
    album3.img4,
    album3.img5,
    album3.img6,
  ];
  const listImage4 = [
    album4.img1,
    album4.img2,
    album4.img3,
    album4.img4,
    album4.img5,
    album4.img6,
  ];
  const listImage5 = [album5.img1, album5.img2, album5.img3, album5.img4];
  const listImage6 = [album6.img1, album6.img2, album6.img3, album6.img4];
  const listImage7 = [album7.img1, album7.img2, album7.img3, album7.img4];
  const listImage8 = [album8.img1, album8.img2, album8.img3, album8.img4];
  const listImage9 = [
    album9.img1,
    album9.img2,
    album9.img3,
    album9.img4,
    album9.img5,
    album9.img6,
    album9.img7,
    album9.img8,
  ];
  const listImage10 = [
    album10.img1,
    album10.img2,
    album10.img3,
    album10.img4,
    album10.img5,
    album10.img6,
    album10.img7,
    album10.img8,
  ];
  const listImage11 = [
    album11.img1,
    album11.img2,
    album11.img3,
    album11.img4,
    album11.img5,
  ];
  return (
    <Wrapper>
      <WrapperContent className="containerImage">
        <div className="box">
          <div class="dream">
            <SlideShowItem album={listImage1} duration={5000} />
            <SlideShowItem album={listImage2} duration={6500} />
            <SlideShowItem album={listImage3} duration={4000} />
            <SlideShowItem album={listImage5} duration={3500} />
          </div>
          <div class="dream">
            <SlideShowItem album={listImage6} duration={6000} />
            <SlideShowItem album={listImage7} duration={7500} />
            <SlideShowItem album={listImage8} duration={5500} />
            <SlideShowItem album={listImage4} duration={5500} />
          </div>
          <div class="dream">
            <SlideShowItem album={listImage9} duration={5200} />
            <SlideShowItem album={listImage10} duration={5000} />
            <SlideShowItem album={listImage11} duration={4500} />
            <SlideShowItem album={listImage10} duration={5000} />
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
}

export default Album;
