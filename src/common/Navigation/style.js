import { Navbar } from "react-bootstrap";
import styled from "styled-components";
export const CustomNavbar = styled(Navbar)`
  position: absolute;
  width: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0) !important;
  color: white;
`;
export const CustomToggle = styled(Navbar.Toggle)`
  border: none;
  &:hover {
    border: none;
    outline: 0;
    box-shadow: none;
  }
`;
export const CustomUl = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 0px;
  li {
    font-size: 14px;
    padding-left: 20px;
    color: #ffffff!important;
    &:checked{
      color: #ffffff!important;
    }
    a{
      color: #ffffff!important;
    &:checked{
      color: #ffffff!important;
    }
    }
  }
`;
export const CustomShowMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 0;
`
