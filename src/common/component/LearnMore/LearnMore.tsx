import learn_more from "../../../static/image/learn_more.svg";
import "./LearnMore.scss";

export const LearnMore: React.FC<{
  onClick?: () => void;
  style?: React.CSSProperties;
}> = ({ onClick, style }) => {
  return (
    <div
      style={{ ...style }}
      className="learn_more"
      onClick={() => {
        onClick && onClick();
      }}
    >
      <img src={learn_more} alt="learn_more" />
    </div>
  );
};
