import "./Home.scss";
import home_background from "../../static/image/home_background.svg";
import home_people from "../../static/image/home_people.svg";
import home_text from "../../static/image/home_text.svg";
import home_background_mobile from "../../static/image/home_background_mobile.svg";
import home_people_mobile from "../../static/image/home_people_mobile.svg";
import home_text_mobile from "../../static/image/home_text_mobile.svg";

import double_down_arrow from "../../static/image/double_down_arrow.svg";
import { useMemo } from "react";
import { Router, switchRouter } from "../../common/helper/router";
import { MyButton } from "../../common/component/MyButton/MyButton";
import { useEffect } from "react";
import { useState } from "react";
import { getAnimationStyle } from "../../common/helper/animation";

const buttonStyle: () => React.CSSProperties = () => ({
  background: "transparent",
  border: "1px solid white",
  position: "absolute",
  width: "150px",
  left: "19%",
  top: "55%",
  fontFamily: "Noto Sans TC",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "18px",
});

export const Home: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const doubleDownArrow = useMemo(() => {
    return (
      <img
        style={{
          ...getAnimationStyle(!isFirstRender, 3, "down", {
            transform: "translate(-50%)",
          }),
        }}
        className="double_down_arrow"
        src={double_down_arrow}
        alt="double_down_arrow"
        onClick={() => {
          switchRouter(Router.origin);
        }}
      />
    );
  }, [isFirstRender]);

  useEffect(() => {
    setIsFirstRender(false);
  }, []);

  return (
    <div id="home" className="home_container">
      {isMobile ? (
        <div className="home_element">
          <img
            style={{
              width: "100%",
              ...getAnimationStyle(!isFirstRender, 1),
            }}
            src={home_background_mobile}
            alt="home_background_mobile"
          />
          <img
            style={{
              position: "absolute",
              left: "50%",
              top: "70px",
              width: "60%",
              ...getAnimationStyle(!isFirstRender, 2, "left", {
                transform: "translate(-50%)",
              }),
            }}
            src={home_text_mobile}
            alt="home_text_mobile"
          />
          <MyButton
            text="我的樹木"
            style={{
              ...buttonStyle(),
              top: "45%",
              left: "50%",
              zIndex: 3,
              ...getAnimationStyle(!isFirstRender, 2, "left", {
                transform: "translate(-50%)",
              }),
            }}
          />
          <img
            style={{
              position: "absolute",
              left: "7%",
              top: "40%",
              width: "96%",
              ...getAnimationStyle(!isFirstRender, 3, "down"),
            }}
            src={home_people_mobile}
            alt="home_people_mobile"
          />
          {doubleDownArrow}
        </div>
      ) : (
        <div className="home_element">
          <img
            style={{ width: "100%", ...getAnimationStyle(!isFirstRender, 1) }}
            src={home_background}
            alt="home_background"
          />
          <img
            style={{
              position: "absolute",
              left: "19%",
              top: "35%",
              width: "30%",
              ...getAnimationStyle(!isFirstRender, 2, "left"),
            }}
            src={home_text}
            alt="home_text"
          />
          <MyButton
            text="我的樹木"
            style={{
              ...buttonStyle(),
              ...getAnimationStyle(!isFirstRender, 2, "left"),
            }}
          />
          <img
            style={{
              position: "absolute",
              right: "10%",
              top: "10%",
              width: "37%",
              ...getAnimationStyle(!isFirstRender, 3, "down"),
            }}
            src={home_people}
            alt="home_people"
          />
          {doubleDownArrow}
        </div>
      )}
    </div>
  );
};
