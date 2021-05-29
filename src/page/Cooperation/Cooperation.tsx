import { useState } from "react";
import "./Cooperation.scss";
import { fakeCooperations, ICooperation } from "./type";
import temp from "../../static/image/temp.svg";
import { LearnMore } from "../../common/component/LearnMore/LearnMore";

export const Cooperation: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [cooperations] = useState<ICooperation[]>(fakeCooperations);
  return (
    <div id="cooperation" className="cooperation_container">
      <div>
        <span className="subtitle">合作單位</span>
      </div>
      <div>
        <span className="bold_blue">合作單位介紹</span>
      </div>
      <div
        className={`cooperation_element_container${isMobile ? "_mobile" : ""}`}
      >
        {cooperations.map((cooperation) => {
          return (
            <div className="cooperation_element">
              <img src={temp} alt="temp" />
              <span className="blue">{cooperation.title}</span>
              <span className="normal">{cooperation.content}</span>
              <LearnMore
                style={{
                  textAlign: isMobile ? "start" : "end",
                  marginTop: "20px",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
