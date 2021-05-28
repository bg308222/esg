import "./Layout.scss";
import { useRef, useState } from "react";
import { Header } from "./Header";

const checkIsWindowMobile = () => {
  return window.innerWidth < 800;
};

export const Layout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(checkIsWindowMobile());
  const timeout = useRef<NodeJS.Timeout>();

  // handle page size
  const replaceTimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setIsMobile(checkIsWindowMobile());
    }, 100);
  };

  window.addEventListener("resize", () => {
    replaceTimeout();
  });

  return (
    <div className="layout_container">
      <Header isMobile={isMobile} />
    </div>
  );
};
