import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CustomUl, CustomShowMenu } from "./style.js";
import "./styled.css";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
window.addEventListener("load", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuChild = document.querySelectorAll(".has-child > a");
  menuChild?.forEach((el) =>
    el.addEventListener("click", function (e) {
      e.preventDefault();
      const subMenu = e.target?.nextElementSibling?.classList.toggle("show");
    })
  );
  menuToggle?.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
  });
});

function Navigation() {
  const [menuMobile, setMenuMobile] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [showIcon, setShowIcon] = useState(true);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const { width } = windowDimensions;
    console.log(width);
    if (width <= 551) {
      setShowIcon(false);
    }
    if(width>1022&&width<1144){
      setShowIcon(false)
    }
    if(width>=1144){
      setShowIcon(true)
    }
  }, [windowDimensions]);
  return (
    <>
      <CustomShowMenu
        className="test123"
        onClick={() => setMenuMobile(false)}
      ></CustomShowMenu>
      <div className="wrapper">
        <nav className="nav">
          <Link to="/" className="logo" style={{ cursor: "pointer" }}>
            Thanhson Productions
          </Link>
          <i
            className="fal fa-bars menu-toggle"
            onClick={() => setMenuMobile(!menuMobile)}
          />
          <ul className={menuMobile === true ? "menu show" : "menu"}>
            <li className="menu-item ">
              <Link to="/" className="menu-link">
                Trang chủ
              </Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="menu-link">
                Chụp ảnh
                <i
                  className="fal fa-angle-down menu-arrow"
                  style={{ marginLeft: "2px" }}
                />
              </a>
              <ul className="menu-child ">
                <li className="menu-child-item">
                  <Link to="/aldsf" className="menu-child-link">
                    Phóng sự cưới
                  </Link>
                </li>
                <li className="menu-child-item">
                  <Link to="/album-phong-su-cuoi" className="menu-child-link">
                    Sự kiện
                  </Link>
                </li>
                <li className="menu-child-item">
                  <a href="#" className="menu-child-link">
                    Kỉ yếu
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="menu-link">
                Quay phim
                <i
                  className="fal fa-angle-down menu-arrow"
                  style={{ marginLeft: "2px" }}
                />
              </a>
              <ul className="menu-child ">
                <li className="menu-child-item has-child">
                  <a href="#" className="menu-child-link">
                    Phóng sự cưới
                  </a>
                </li>
                <li className="menu-child-item">
                  <a href="#" className="menu-child-link">
                    Sự kiện
                  </a>
                </li>
                <li className="menu-child-item">
                  <a href="#" className="menu-child-link">
                    Kỉ yếu
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Báo giá
              </a>
            </li>
            <li className="menu-item">
              <Link to="/about" className="menu-link">
                Giới thiệu
              </Link>
            </li>
          </ul>
         {showIcon&&<CustomUl>
            <li>
              <a
                href="http://www.facebook.com/thanhsonitptit"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/son.camcam/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <i className="fab fa-flickr" />
            </li>
            <li>
              <i className="fab fa-youtube" />
            </li>
          </CustomUl>} 
        </nav>
      </div>
    </>
  );
}

export default Navigation;
