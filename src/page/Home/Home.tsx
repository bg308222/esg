import "./Home.scss";
import home from "../../static/image/home.svg";
import home_mobile from "../../static/image/home_mobile.svg";
import double_down_arrow from "../../static/image/double_down_arrow.svg";
import { useMemo } from "react";
import { Router, switchRouter } from "../../common/helper/router";
import { MyButton } from "../../common/component/MyButton/MyButton";

const buttonStyle: React.CSSProperties = {
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
};

export const Home: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const doubleDownArrow = useMemo(() => {
    return (
      <img
        className="double_down_arrow"
        src={double_down_arrow}
        alt="double_down_arrow"
        onClick={() => {
          switchRouter(Router.origin);
        }}
      />
    );
  }, []);

  return (
    <div id="home" className="home_container">
      {isMobile ? (
        <div className="home_element">
          <MyButton
            text="我的樹木"
            style={{
              ...buttonStyle,
              transform: "translate(-50%)",
              left: "50%",
            }}
          />
          <img style={{ width: "100%" }} src={home_mobile} alt="home" />
          {doubleDownArrow}
        </div>
      ) : (
        <div className="home_element">
          <MyButton text="我的樹木" style={buttonStyle} />
          <img style={{ width: "100%" }} src={home} alt="home" />
          {doubleDownArrow}
        </div>
      )}
    </div>
  );
};
