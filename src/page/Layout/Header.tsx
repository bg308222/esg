import React, { Fragment, useState } from "react";
import { NAVBARS } from "./type";
import { MyButton } from "../../common/component/MyButton/MyButton";

import fuban from "../../static/image/fubon_logo.svg";
import my_tree from "../../static/image/my_tree.svg";
import {
  getCurrentRoute,
  isScrolling,
  Router,
  switchRouter,
} from "../../common/helper/router";
import { useRef } from "react";
import { useEffect } from "react";

export const Header: React.FC<{
  isMobile: boolean;
  isPopUpShown: boolean;
  onNavbarClick?: (router: Router) => void;
  onCancelClick?: () => void;
  onMyTreeClick?: () => void;
  onScroll?: (scrollTop: number) => void;
}> = ({
  isMobile,
  onNavbarClick,
  onCancelClick,
  onMyTreeClick,
  onScroll,
  isPopUpShown,
}) => {
  const [currentNavbar, setCurrentNavbar] = useState(Router.home);

  useEffect(() => {
    const main = document.getElementsByClassName("main")[0];
    main.addEventListener("scroll", ({ currentTarget }) => {
      if (!isScrolling()) {
        onScroll && onScroll((currentTarget as HTMLDivElement).scrollTop);
        setCurrentNavbar(
          getCurrentRoute((currentTarget as HTMLDivElement).scrollTop)
        );
      }
    });
  }, [onScroll]);

  const handleNavbarClick = async (key: Router) => {
    onNavbarClick && onNavbarClick(currentNavbar);
    setCurrentNavbar(key);
    await switchRouter(key);
  };

  return (
    <div
      id="header"
      className="header_container"
      style={{ display: isPopUpShown ? "none" : undefined }}
    >
      {isMobile ? (
        <Fragment>
          <img
            className="fuban_logo"
            style={{ width: "180px", marginLeft: "20px" }}
            src={fuban}
            alt="fuban"
            onClick={() => {
              window.open(
                "https://www.fubon.com/financialholdings/home/index.html"
              );
            }}
          />
          <img
            className="navbar_logo"
            src={my_tree}
            alt={"my_tree"}
            onClick={() => {}}
          />
          <div className="navbar_container_mobile">
            <div
              style={{
                position: "absolute",
                backgroundColor: "#30daa2",
                transitionProperty: "left",
                transitionDuration: "0.5s",
                left: (() => {
                  switch (currentNavbar) {
                    case Router.home: {
                      return "0%";
                    }
                    case Router.origin: {
                      return "25%";
                    }
                    case Router.introduction: {
                      return "50%";
                    }
                    case Router.cooperation: {
                      return "75%";
                    }
                    default: {
                      return "0%";
                    }
                  }
                })(),
                bottom: 0,
                width: "25%",
                height: "4px",
              }}
            />
            {NAVBARS.map(({ key, value }) => {
              return (
                <div
                  className={`navbar_element_mobile${
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
        </Fragment>
      ) : (
        <Fragment>
          <img
            className="fuban_logo"
            style={{ width: "180px" }}
            src={fuban}
            alt="fuban"
            onClick={() => {
              window.open(
                "https://www.fubon.com/financialholdings/home/index.html"
              );
            }}
          />
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
            style={{ width: "110px" }}
          />
        </Fragment>
      )}
    </div>
  );
};
