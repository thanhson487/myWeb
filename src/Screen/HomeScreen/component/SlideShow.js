import React from "react";
import BackgroundSlider from "react-background-slider";
import "react-slideshow-image/dist/styles.css";
import img1 from "./../../../img/slideshow/img1.jpg";
import img2 from "./../../../img/slideshow/img2.jpg";
import img3 from "./../../../img/slideshow/img3.jpg";
import img4 from "./../../../img/slideshow/img4.jpg";
import img5 from "./../../../img/slideshow/img5.jpg";
import "./style.scss";

const fadeImages = [img1, img2, img3, img4, img5];
function SlideShow() {
  return (
    <div className="slide-container">
      <div className="content">
        <h1 className="content__title">Creative Photography Studio</h1>
        <p className="content__dr">
          Aperiri sanctus eam ei, simul dolorum vel ex
        </p>
        <a
          href="https://matchthemes.com/demowp/gleam/about-us/"
          className="content__btn"
        >
          Find More
        </a>
      </div>
      <BackgroundSlider images={fadeImages} duration={2} transition={1} />
    </div>
  );
}

export default SlideShow;
