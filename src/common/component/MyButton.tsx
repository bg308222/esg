import "./MyButton.scss";

export const MyButton: React.FC<{
  text: string;
  onClick?: () => void;
  className?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
}> = ({ text, onClick, className, style }) => {
  return (
    <div
      className={`MyButton ${className || ""}`}
      onClick={() => {
        onClick && onClick();
      }}
      style={style}
    >
      {text}
    </div>
  );
};
