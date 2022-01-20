import React, { useEffect, useState } from "react";
import "./style.scss";
import {
    CustomtypoContent,
    CustomtypoTitle,
    CustomWrapper
} from "./styled-album";
function AlbumItem(props) {
  const { album, timeout } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const inter = setInterval(() => {
      const index = slideIndex;
      const length = 5;
      if (index < length) {
        setSlideIndex(index + 1);
      }
      if (index === 5) {
        setSlideIndex(0);
      }
    }, [timeout]);
    return () => clearInterval(inter);
  }, [slideIndex, timeout]);
  return (
    <div className="gallery-item">
      {album.map((item, index) => {
        if (slideIndex === index) {
          return (
            <>
              <div className={`fade-in`}>
                <img src={item} style={{ borderRadius: "5px" }} alt="" />
              </div>
              <CustomWrapper>
                <CustomtypoTitle variant="h2">Black-Wlide</CustomtypoTitle>
                <CustomtypoContent variant="body1">People</CustomtypoContent>
              </CustomWrapper>
            </>
          );
        }
        return <></>;
      })}
    </div>
  );
}

export default AlbumItem;
