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

const getAnimation = (sequence: number, isFirstRender?: boolean) => {
  const perUnit = 0.5;
  return {
    transitionProperty: "opacity",
    transitionDuration: perUnit + "s",
    transitionDelay: sequence * perUnit + "s",
    opacity: isFirstRender ? 0 : 1,
  };
};

const buttonStyle: (isFirstRender?: boolean) => React.CSSProperties = (
  isFirstRender
) => ({
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
  ...getAnimation(2, isFirstRender),
});

export const Home: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const doubleDownArrow = useMemo(() => {
    return (
      <img
        style={{
          ...getAnimation(3, isFirstRender),
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
              ...getAnimation(1, isFirstRender),
            }}
            src={home_background_mobile}
            alt="home_background_mobile"
          />
          <img
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%)",
              top: "70px",
              width: "60%",
              ...getAnimation(2, isFirstRender),
            }}
            src={home_text_mobile}
            alt="home_text_mobile"
          />
          <MyButton
            text="我的樹木"
            style={{
              ...buttonStyle(isFirstRender),
              transform: "translate(-50%)",
              top: "45%",
              left: "50%",
              zIndex: 3,
            }}
          />
          <img
            style={{
              position: "absolute",
              left: "7%",
              top: "40%",
              width: "96%",
              ...getAnimation(3, isFirstRender),
            }}
            src={home_people_mobile}
            alt="home_people_mobile"
          />
          {doubleDownArrow}
        </div>
      ) : (
        <div className="home_element">
          <img
            style={{ width: "100%", ...getAnimation(1, isFirstRender) }}
            src={home_background}
            alt="home_background"
          />
          <img
            style={{
              position: "absolute",
              left: "19%",
              top: "35%",
              width: "30%",
              ...getAnimation(2, isFirstRender),
            }}
            src={home_text}
            alt="home_text"
          />
          <MyButton
            text="我的樹木"
            style={{
              ...buttonStyle(isFirstRender),
            }}
          />
          <img
            style={{
              position: "absolute",
              right: "10%",
              top: "10%",
              width: "37%",
              ...getAnimation(3, isFirstRender),
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
