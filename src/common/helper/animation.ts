export const getAnimationStyle = (
  isShown: boolean,
  sequence: number = 0,
  type?: "left" | "down",
  {
    transform,
  }: {
    transform?: string;
  } = {}
) => {
  const perUnit = 0.5;
  const style: React.CSSProperties = {
    transitionProperty: "opacity,transform",
    transitionDuration: perUnit + "s",
    transitionDelay: sequence * perUnit + "s",
    opacity: isShown ? 1 : 0,
  };
  if (type) {
    switch (type) {
      case "left": {
        style.transform = isShown
          ? transform || "translate(0%)"
          : "translate(-100%)";
        break;
      }
      case "down": {
        style.transform = isShown
          ? transform || "translate(0%,0%)"
          : "translate(0%,100%)";
        break;
      }
      default: {
        break;
      }
    }
  }
  return style;
};
