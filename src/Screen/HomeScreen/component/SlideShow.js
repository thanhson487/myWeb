import React from "react";
import BackgroundSlider from "react-background-slider";
import "react-slideshow-image/dist/styles.css";
import listImg from "./../../../img/HomeScreen/listImg"
import "./style.scss";

const fadeImages = [listImg.img1, listImg.img2,  listImg.img4, listImg.img5,listImg.img6];
function SlideShow() {
  return (
    <div className="slide-container">
       <BackgroundSlider images={fadeImages} duration={5} transition={1} className = "test"/>
      <div className="content">
        <h1 className="content__title">Cam Production</h1>
        <p className="content__dr">
        Trân trọng từng khoảnh khắc !
        </p>
      </div>
     
    </div>
  );
}

export default SlideShow;
