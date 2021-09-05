import React, { useMemo } from "react";
import Gallery from "react-grid-gallery";
import { Typography } from "@material-ui/core";
import {CustomtypoTitle,CustomtypoContent,CustomWrapper} from "./styled-album"

import "./style.scss";
import img1 from "./../../../img/slideshow/img1.jpg";
import img2 from "./../../../img/slideshow/img2.jpg";
import img3 from "./../../../img/slideshow/img3.jpg";
import img4 from "./../../../img/slideshow/img4.jpg";
import img5 from "./../../../img/slideshow/img5.jpg";
const IMAGES = [
  {
    id: 1,
    src: img1,
    thumbnail: img1,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 2,
    src: img2,
    thumbnail: img2,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    caption: "After Rain (Jeshu John - designerspics.com)",
  },

  {
    id: 3,
    src: img2,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img2,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img3,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img3,
    caption: "Aftr Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img3,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img3,

    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img5,
    thumbnail: img5,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",

    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    id: 3,
    src: img4,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img4,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];

function Album(props) {
  const handleClick = (e) => {
    console.log(e);
  };
  const renderImage = useMemo(() => {
    return IMAGES.map((item) => {
      return (
        <div className="gallery-item">
          <img src={item.src} alt=""></img>
          
        </div>
      );
    });
  }, []);
  return (
    <div>
      <div className="gallery">{renderImage}</div>
    </div>
  );
}

export default Album;
