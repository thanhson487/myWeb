import React, { useEffect, useState } from "react";
import reactImageSize from "react-image-size";
import { Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import "./style.scss";
import { CustomContainer } from "./styled-album";
function Image({ item }) {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  useEffect(() => {
    const getImage = async () => {
      const { width, height } = await reactImageSize(item.src);
      setWidth(width);
      setHeight(height);
    };
    getImage();
  }, [item.src]);

  return (
    <CustomContainer className="gallery-item">
      <Link to="album-detail">
        <Item
          original={item.src}
          thumbnail={item.src}
          width={width}
          height={height}
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={item.src} alt="" />
          )}
        </Item>
      </Link>
    </CustomContainer>
  );
}

export default Image;
