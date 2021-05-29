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

const checkIsWindowMobile = () => {
  return window.innerWidth < 800;
};

export const Layout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(checkIsWindowMobile());
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
      <Header isMobile={isMobile} />
      <Home isMobile={isMobile} />
      <Origin isMobile={isMobile} />
      <Introduction isMobile={isMobile} />
      <Cooperation isMobile={isMobile} />
      <Footer />
      <div className="scroll_to_top">
        <img
          src={scroll_to_top}
          alt="scroll_to_top"
          onClick={() => {
            switchRouter(Router.home);
          }}
        />
      </div>
    </div>
  );
};
