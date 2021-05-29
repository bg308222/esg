import React, { Fragment, useState } from "react";
import { NAVBARS } from "./type";
import { MyButton } from "../../common/component/MyButton/MyButton";

import fuban from "../../static/image/fubon_logo.svg";
import menu from "../../static/image/menu_logo.svg";
import cancel from "../../static/image/cancel_logo.svg";
import {
  getCurrentRoute,
  Router,
  switchRouter,
} from "../../common/helper/router";
import { useRef } from "react";

export const Header: React.FC<{
  isMobile: boolean;
  onNavbarClick?: (router: Router) => void;
  onCancelClick?: () => void;
  onMyTreeClick?: () => void;
}> = ({ isMobile, onNavbarClick, onCancelClick, onMyTreeClick }) => {
  const [currentNavbar, setCurrentNavbar] = useState(Router.home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeout = useRef<NodeJS.Timeout>();

  window.addEventListener("scroll", ({ currentTarget }) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setCurrentNavbar(getCurrentRoute((currentTarget as Window).pageYOffset));
    }, 50);
  });

  const handleNavbarClick = (key: Router) => {
    onNavbarClick && onNavbarClick(currentNavbar);
    setCurrentNavbar(key);
    switchRouter(key);
  };

  return (
    <div id="home" className="header_container">
      {isMobile ? (
        <Fragment>
          <img
            style={{ width: "180px", marginLeft: "20px" }}
            src={fuban}
            alt="fuban"
          />
          <img
            className="navbar_logo"
            src={isMenuOpen ? cancel : menu}
            alt={isMenuOpen ? "cancel" : "menu"}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          {isMenuOpen && (
            <div className="navbar_container_mobile">
              {NAVBARS.map(({ key, value }) => {
                return (
                  <div
                    className={`navbar_element_mobile${
                      key === currentNavbar ? " current" : ""
                    }`}
                    onClick={() => {
                      handleNavbarClick(key);
                      setIsMenuOpen(false);
                    }}
                    key={key}
                  >
                    {value}
                  </div>
                );
              })}
              <MyButton
                text="我的樹木"
                onClick={() => {
                  onMyTreeClick && onMyTreeClick();
                }}
                className="navbar_element_mobile"
                style={{ width: "100px" }}
              />
            </div>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <img style={{ width: "180px" }} src={fuban} alt="fuban" />
          <div className="navbar_container">
            {NAVBARS.map(({ key, value }) => {
              return (
                <div
                  className={`navbar_element${
                    key === currentNavbar ? " current" : ""
                  }`}
                  onClick={() => {
                    handleNavbarClick(key);
                  }}
                  key={key}
                >
                  {value}
                </div>
              );
            })}
          </div>
          <MyButton
            text="我的樹木"
            onClick={() => {
              onMyTreeClick && onMyTreeClick();
            }}
            style={{ width: "100px" }}
          />
        </Fragment>
      )}
    </div>
  );
};
