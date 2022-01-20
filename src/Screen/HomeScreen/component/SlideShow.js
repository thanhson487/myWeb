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
       <BackgroundSlider images={fadeImages} duration={2} transition={1} />
      <div className="content">
        <h1 className="content__title">Cam Production</h1>
        <p className="content__dr">
        Capture your best memories!
        </p>
      </div>
     
    </div>
  );
}

export default SlideShow;
