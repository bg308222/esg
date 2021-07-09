import cancel_block from "../../../static/image/cancel_block.svg";
import scroll_to_top from "../../../static/image/scroll_to_top.svg";
import arrow_right from "../../../static/image/arrow_right.svg";
import { ContentType, ILearnMoreButton, ILearnMoreContent } from "./type";
import "./LearnMore.scss";
import { useEffect } from "react";

export const LearnMoreButton: React.FC<ILearnMoreButton> = ({
  onClick,
  style,
}) => {
  return (
    <div
      style={{ ...style }}
      className="learn_more"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <span>了解更多</span>
      <img
        src={arrow_right}
        alt="learn_more"
        style={{ marginLeft: "10px", width: "13px" }}
      />
    </div>
  );
};

export const LearnMoreContent: React.FC<ILearnMoreContent> = ({
  title,
  content,
  onCancel,
  isMobile,
}) => {
  useEffect(() => {
    const element = document.getElementsByClassName("learn_more_container")[0];
    const getScrollTop = () => {
      const element = document.getElementsByClassName(
        "learn_more_container"
      )[0];
      return element.scrollTop;
    };
    const scrollToTopElement = document.querySelector(
      ".learn_more_container .scroll_to_top"
    ) as HTMLElement;
    element.addEventListener("scroll", () => {
      if (getScrollTop() === 0) {
        scrollToTopElement.style.opacity = "0";
      } else {
        scrollToTopElement.style.opacity = "1";
      }
    });
  }, []);
  return (
    <div className="learn_more_container">
      <div
        className="header"
        onClick={() => {
          onCancel && onCancel();
        }}
      >
        <img className="cancel" src={cancel_block} alt="cancel_block" />
      </div>
      <div className={`body${isMobile ? " mobile" : ""}`}>
        {!!title && <div className="title">{title}</div>}
        <div className="content_container">
          {content.map((v) => {
            switch (v.type) {
              case ContentType.title: {
                return (
                  <div key={Math.random()} className="title">
                    {v.text}
                  </div>
                );
              }
              case ContentType.text: {
                return (
                  <div key={Math.random()} className="text">
                    {v.text}
                  </div>
                );
              }
              case ContentType.image: {
                return (
                  <div key={Math.random()} className="image">
                    <img style={{ width: "100%" }} src={v.url} alt={v.url} />
                    {v.subTitle && <div>{v.subTitle}</div>}
                  </div>
                );
              }
              default: {
                return <div />;
              }
            }
          })}
        </div>
      </div>
      <div className="footer" />
      <div className="scroll_to_top" style={{ opacity: "0" }}>
        <img
          src={scroll_to_top}
          alt="scroll_to_top"
          onClick={async () => {
            const learnMoreContainer = document.getElementsByClassName(
              "learn_more_container"
            )[0];
            while (learnMoreContainer.scrollTop > 0) {
              console.log(learnMoreContainer.scrollTop);
              await new Promise((res) => {
                setTimeout(() => {
                  Math.max(
                    (learnMoreContainer.scrollTop -= Math.pow(
                      learnMoreContainer.scrollTop,
                      0.6
                    )),
                    10
                  );
                  res(1);
                }, 10);
              });
            }
          }}
        />
      </div>
    </div>
  );
};
