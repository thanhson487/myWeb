import "photoswipe/dist/default-skin/default-skin.css";
import "photoswipe/dist/photoswipe.css";
import { useMemo } from "react";
import { Gallery } from "react-photoswipe-gallery";
import img1 from "./../../../../img/slideshow/img1.jpg";
import img2 from "./../../../../img/slideshow/img2.jpg";
import img3 from "./../../../../img/slideshow/img3.jpg";
import img4 from "./../../../../img/slideshow/img4.jpg";
import img5 from "./../../../../img/slideshow/img5.jpg";
import Image from "./Image";
import "./style.scss";
import {
  Wrapper,
  WrapperContent
} from "./styled-album";

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
  {
    id: 3,
    src: img1,
    thumbnailWidth: "100%",
    thumbnailHeight: "100%",
    thumbnail: img4,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
];

function Album() {
  const renderImage = useMemo(() => {
    return IMAGES.map( (item,index) => {
      return (
      <Image key = {index} item = {item}/>
      );
    });
  }, []);
  return (
    <Gallery  shareButton={false} allowFullScreen = {true}>
      <Wrapper>
        <WrapperContent>
          <div className="gallery">{renderImage}</div>
        </WrapperContent>
      </Wrapper>
    </Gallery>
  );
}

export default Album;
