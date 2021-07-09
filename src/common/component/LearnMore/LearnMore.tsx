import cancel_block from "../../../static/image/cancel_block.svg";
import scroll_to_top from "../../../static/image/scroll_to_top.svg";
import arrow_right from "../../../static/image/arrow_right.svg";
import { ContentType, ILearnMoreButton, ILearnMoreContent } from "./type";
import "./LearnMore.scss";

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
  return (
    <div className="learn_more_container" id="top">
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
      <div className="scroll_to_top">
        <img
          src={scroll_to_top}
          alt="scroll_to_top"
          onClick={() => {
            const learnMoreContainer = document.getElementsByClassName(
              "learn_more_container"
            )[0];
            learnMoreContainer.scrollTo({ top: 0 });
          }}
        />
      </div>
    </div>
  );
};
