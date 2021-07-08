export const BlockTitle: React.FC<{
  id?: string;
  style?: React.CSSProperties;
  title: string;
  subTitle: string;
}> = ({ title, style, subTitle, id }) => {
  return (
    <div id={id || ""} className="animation" style={style && { ...style }}>
      <div>
        <span className="noto_14">{subTitle}</span>
      </div>
      <div className="part_title" style={{ marginTop: "10px" }}>
        <span className="noto_32">{title}</span>
      </div>
    </div>
  );
};
