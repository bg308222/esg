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

export const checkIsWindowMobile = () => {
  return window.innerWidth < 800;
};

export const Layout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(checkIsWindowMobile());
  const [isPopUpShown, setIsPopUpShown] = useState(true);
  const [isScrollToTopShown, setIsScrollToTopShown] = useState(false);
  const [popUpContent, setPopUpContent] = useState<JSX.Element>();
  const [isOriginShown, setIsOriginShown] = useState(false);
  const [isIntroductionShown, setIsIntroductionShown] = useState(false);
  const [isCooperationShown, setIsCooperationShown] = useState(false);
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
          onScroll={(scrollTop) => {
            setIsScrollToTopShown(scrollTop !== 0);

            const origin = document.getElementById("origin") as HTMLDivElement;
            const introduction = document.getElementById(
              "introduction"
            ) as HTMLDivElement;
            const cooperation = document.getElementById(
              "cooperation"
            ) as HTMLDivElement;

            if (origin.offsetTop - scrollTop < window.innerHeight) {
              setIsOriginShown(true);
            }
            if (introduction.offsetTop - scrollTop < window.innerHeight) {
              setIsIntroductionShown(true);
            }
            if (cooperation.offsetTop - scrollTop < window.innerHeight) {
              setIsCooperationShown(true);
            }
          }}
        />
        <Home isMobile={isMobile} />
        <div className={`animation ${isOriginShown ? "isShown" : ""}`}>
          <Origin isMobile={isMobile} isShown={isOriginShown} />
        </div>
        <div className={`animation ${isIntroductionShown ? "isShown" : ""}`}>
          <Introduction isMobile={isMobile} isShown={isIntroductionShown} />
        </div>
        <div className={`animation ${isCooperationShown ? "isShown" : ""}`}>
          <Cooperation
            isMobile={isMobile}
            isShown={isCooperationShown}
            popUp={{ setIsPopUpShown, setPopUpContent }}
          />
        </div>
        <Footer />
      </div>
      <div
        className="scroll_to_top"
        style={{ display: isScrollToTopShown ? undefined : "none" }}
      >
        <img
          src={scroll_to_top}
          alt="scroll_to_top"
          onClick={() => {
            switchRouter(Router.header);
          }}
        />
      </div>
    </div>
  );
};
