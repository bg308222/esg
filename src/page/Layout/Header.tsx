import React, { Fragment, useState } from "react";
import { NAVBARS, Router } from "./type";
import { MyButton } from "../../common/component/MyButton";

import fuban from "../../static/image/fubon-logo.svg";
import menu from "../../static/image/menu-logo.svg";
import cancel from "../../static/image/cancel-logo.svg";

export const Header: React.FC<{
  isMobile: boolean;
  onNavbarClick?: (router: Router) => void;
  onCancelClick?: () => void;
  onMyTreeClick?: () => void;
}> = ({ isMobile, onNavbarClick, onCancelClick, onMyTreeClick }) => {
  const [currentNavbar, setCurrentNavbar] = useState(Router.home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header_container">
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
                      onNavbarClick && onNavbarClick(currentNavbar);
                      setCurrentNavbar(key);
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
                    onNavbarClick && onNavbarClick(currentNavbar);
                    setCurrentNavbar(key);
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
