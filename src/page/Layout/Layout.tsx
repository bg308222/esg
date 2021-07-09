import "./Layout.scss";
import { useRef, useState } from "react";
import { Header } from "./Header";
import { Home } from "../Home/Home";
import { Origin } from "../Origin/Origin";
import { Introduction } from "../Introduction/Introduction";
import { Cooperation } from "../Cooperation/Cooperation";
import { Footer } from "../Footer/Footer";
import scroll_to_top from "../../static/image/scroll_to_top.svg";
import { Router, switchRouter } from "../../common/helper/router";
import { getAnimationStyle } from "../../common/helper/animation";

export const checkIsWindowMobile = () => {
  return window.innerWidth < 800;
};

export const Layout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(checkIsWindowMobile());
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [isScrollToTopShown, setIsScrollToTopShown] = useState(false);
  const [popUpContent, setPopUpContent] = useState<JSX.Element>();
  const timeout = useRef<NodeJS.Timeout>();

  window.addEventListener("resize", () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setIsMobile(checkIsWindowMobile());
    }, 100);
  });

  return (
    <div className="layout_container">
      <div
        className="pop_up"
        style={{ visibility: isPopUpShown ? "visible" : "hidden" }}
      >
        {popUpContent && popUpContent}
      </div>
      <div className="main">
        <Header
          isMobile={isMobile}
          isPopUpShown={isPopUpShown}
          onScroll={(scrollTop) => {
            setIsScrollToTopShown(scrollTop !== 0);
            const animationElements = Array.from(
              document.querySelectorAll<HTMLElement>(
                ".animation,.animation_left,.animation_right"
              )
            );
            animationElements.forEach((animationElement) => {
              let originClassList = (
                animationElement.getAttribute("class") as string
              ).split(" ");
              if (
                animationElement.offsetTop - scrollTop <
                window.innerHeight - 150
              ) {
                if (!originClassList.includes("isShown"))
                  originClassList.push("isShown");
              } /* else {
                originClassList = originClassList.filter((str) => {
                  return str !== "isShown";
                });
              } back animation */
              animationElement.setAttribute("class", originClassList.join(" "));
            });
          }}
        />
        <Home isMobile={isMobile} />
        <Origin isMobile={isMobile} />
        <Introduction isMobile={isMobile} />
        <Cooperation
          isMobile={isMobile}
          popUp={{ setIsPopUpShown, setPopUpContent }}
        />
        <Footer />
      </div>
      <div
        className="scroll_to_top"
        style={getAnimationStyle(isScrollToTopShown)}
      >
        <img
          src={scroll_to_top}
          alt="scroll_to_top"
          onClick={async () => {
            await switchRouter(Router.header);
          }}
        />
      </div>
    </div>
  );
};
