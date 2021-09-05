import React, { useState } from "react";
import { CustomUl } from "./style.js";
import "./styled.css";
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
  return (
    <>
      <div className="wrapper">
        <nav className="nav">
          <p className="logo">ThanhSon</p>
          <i
            className="fal fa-bars menu-toggle"
            onClick={() => setMenuMobile(!menuMobile)}
          />
          <ul className={menuMobile === true ? "menu show" : "menu"}>
            <li className="menu-item has-child">
              <a href="#" className="menu-link">
                Trang chủ <i className="fal fa-angle-down menu-arrow" />
              </a>
              <ul className="menu-child ">
                <li className="menu-child-item has-child">
                  <a href="#" className="menu-child-link">
                    Contact
                  </a>
                </li>
                <li className="menu-child-item">
                  <a href="#" className="menu-child-link">
                    Albums
                  </a>
                </li>
                <li className="menu-child-item">
                  <a href="#" className="menu-child-link">
                    galleries
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Category
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Album
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                Branding
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link">
                About
              </a>
            </li>
          </ul>
          <CustomUl>
            <li>
              <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li><i class="fab fa-flickr"></i></li>
            <li><i class="fab fa-youtube"></i></li>
          </CustomUl>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
