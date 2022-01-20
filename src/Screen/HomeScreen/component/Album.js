import React, { useMemo } from "react";
import img1 from "../img/TrendAlbumPsc1/img1.jpg";
import img2 from "../img/TrendAlbumPsc1/img2.jpg";
import img3 from "../img/TrendAlbumPsc1/img3.jpg";
import img4 from "../img/TrendAlbumPsc1/img4.jpg";
import img5 from "../img/TrendAlbumPsc1/img5.jpg";
import img6 from "../img/TrendAlbumPsc1/img6.jpg";
//album 2
import img1_album2 from "../img/TrendAlbum2/img1_album2.jpg";
import img2_album2 from "../img/TrendAlbum2/img2_album2.jpg";
import img3_album2 from "../img/TrendAlbum2/img3_album2.jpg";
import img4_album2 from "../img/TrendAlbum2/img4_album2.jpg";
import img5_album2 from "../img/TrendAlbum2/img5_album2.jpg";
import img6_album2 from "../img/TrendAlbum2/img6_album2.jpg";
//album 3
import img1_album3 from "../img/TrendAlbum3/img1_album3.jpg";
import img2_album3 from "../img/TrendAlbum3/img2_album3.jpg";
import img3_album3 from "../img/TrendAlbum3/img3_album3.jpg";
import img4_album3 from "../img/TrendAlbum3/img4_album3.jpg";
import img5_album3 from "../img/TrendAlbum3/img5_album3.jpg";
import img6_album3 from "../img/TrendAlbum3/img6_album3.jpg";
//album 4
import img1_album4 from "../img/TrendAlbum4/img1_album4.jpg";
import img2_album4 from "../img/TrendAlbum4/img2_album4.jpg";
import img3_album4 from "../img/TrendAlbum4/img3_album4.jpg";
import img4_album4 from "../img/TrendAlbum4/img4_album4.jpg";
import img5_album4 from "../img/TrendAlbum4/img5_album4.jpg";
import img6_album4 from "../img/TrendAlbum4/img6_album4.jpg";
import AlbumItem from "./AlbumItem";
import "./style.scss";
import { Wrapper, WrapperContent } from "./styled-album";

function Album(props) {
  const album1 = [img1, img2, img3, img4, img5, img6];
  const album2 = [
    img1_album2,
    img2_album2,
    img3_album2,
    img4_album2,
    img5_album2,
    img6_album2,
  ];
  const album3 = [
    img1_album3,
    img2_album3,
    img3_album3,
    img4_album3,
    img5_album3,
    img6_album3,
  ];
  const album4 = [
    img1_album4,
    img2_album4,
    img3_album4,
    img4_album4,
    img5_album4,
    img6_album4,
  ];
  return (
    <Wrapper>
      <WrapperContent className="container">
        <div className="box">
          <div class="dream">
            <AlbumItem album={album1} timeout={5000} />
            <AlbumItem album={album2} timeout={6500} />
            <AlbumItem album={album3} timeout={4000} />
          </div>
          <div class="dream">
            <AlbumItem album={album4} timeout={6000} />
            <AlbumItem album={album3} timeout={5500} />
            <AlbumItem album={album2} timeout={7500} />
          </div>
          <div class="dream">
            <AlbumItem album={album3} timeout={7000} />
            <AlbumItem album={album2} timeout={5000} />
            <AlbumItem album={album1} timeout={4500} />
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
}

export default Album;
