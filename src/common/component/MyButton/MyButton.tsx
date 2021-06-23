import { useState } from "react";
import "./MyButton.scss";

interface IButtonStyle {
  color?: string;
  backGroundColor?: string;
  borderColor?: string;
}

export const MyButton: React.FC<{
  text: string;
  onClick?: () => void;
  className?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
  hoverButtonStyle?: IButtonStyle;
}> = ({ text, onClick, className, style, hoverButtonStyle }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className={`MyButton ${className || ""}`}
      onClick={() => {
        onClick && onClick();
      }}
      style={{
        ...style,
        color: isHover
          ? hoverButtonStyle
            ? hoverButtonStyle.color
            : "#30daa2"
          : undefined,
      }}
    >
      {text}
    </div>
  );
};
