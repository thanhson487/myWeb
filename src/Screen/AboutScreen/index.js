import React from "react";
import Banner from "./component/Banner";
import Description from "./component/Description";
import Skill from "./component/Skill";
import Quote from "./component/Quote";
function AboutScreen(props) {
  return (
    <div>
      <Banner />
      <Description />
      <Skill />
      <Quote />
    </div>
  );
}

export default AboutScreen;
