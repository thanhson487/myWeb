import styled from "styled-components";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
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
    color: white;
    &:nth-of-type(1):hover {
      color: #0C88EF;
    }
    &:nth-of-type(2):hover {
      color: orange;
    }
    &:nth-of-type(3):hover {
      color: green;
    }
    &:nth-of-type(4):hover {
      color: red;
    }
  }
`;
