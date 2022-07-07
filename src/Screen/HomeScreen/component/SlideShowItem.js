import React from "react";
import { Zoom } from "react-slideshow-image";
import "./style.scss";
import {
  CustomtypoContent,
  CustomtypoTitle,
  CustomWrapper,
} from "./styled-album";
function SlideShowItem({ duration, album }) {
  const zoomInProperties = {
    scale: 1.2,
    autoplay: true,
    duration: duration,
    arrows: false,
    nextArrow: false,
    indicators: false,
  };
  return (
    <div>
      <Zoom {...zoomInProperties}>
        {album.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
            <img
              style={{ objectFit: "cover", width: "100%" }}
              src={each}
              alt="img"
            />
          </div>
        ))}
      </Zoom>
      <CustomWrapper>
        <CustomtypoTitle variant="h2">Black-Wlide</CustomtypoTitle>
        <CustomtypoContent variant="body1">People</CustomtypoContent>
      </CustomWrapper>
    </div>
  );
}

export default SlideShowItem;
