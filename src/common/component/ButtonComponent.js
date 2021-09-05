import styled from "styled-components";
import Button from "@material-ui/core/Button";
import React from "react";
const CustomBotton = styled(Button)`
    
`
function ButtonComponent(props) {
  const {title} = props;
  return <CustomBotton>{title}</CustomBotton>;
}

export default ButtonComponent;
