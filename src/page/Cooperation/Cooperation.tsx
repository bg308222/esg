import React, { useState } from "react";
import "./Cooperation.scss";
import { fakeCooperations, ICooperation } from "./type";
import {
  LearnMoreButton,
  LearnMoreContent,
} from "../../common/component/LearnMore/LearnMore";
import { IPopUp } from "../Layout/type";
import { BlockTitle } from "../../common/component/BlockTitle/BlockTitle";

export const Cooperation: React.FC<{
  isMobile: boolean;
  popUp: IPopUp;
}> = ({ isMobile, popUp: { setIsPopUpShown, setPopUpContent } }) => {
  const [cooperations] = useState<ICooperation[]>(fakeCooperations);
  return (
    <div id="cooperation" className="cooperation_container">
      <BlockTitle title="合作單位介紹" subTitle="合作單位" />
      <div
        className={` cooperation_element_container${isMobile ? "_mobile" : ""}`}
      >
        {cooperations.map((cooperation, index) => {
          const originElement = document.getElementsByClassName(
            "cooperation_element"
          )[index];
          console.log();
          return (
            <div
              className={`animation_left cooperation_element${
                originElement &&
                (originElement.getAttribute("class") as string)
                  .split(" ")
                  .includes("isShown")
                  ? " isShown"
                  : ""
              }`}
              key={Math.random()}
            >
              <img src={cooperation.imageUrl} alt="cooperation.imageUrl" />
              <span className="text mont_20">{cooperation.title}</span>
              <span className="text mont_14 black">{cooperation.content}</span>
              <div className="text">
                <LearnMoreButton
                  style={{
                    textAlign: "end",
                    marginTop: "20px",
                  }}
                  onClick={() => {
                    setIsPopUpShown(true);
                    setPopUpContent(
                      <LearnMoreContent
                        title={cooperation.learnMore?.title || ""}
                        isMobile={isMobile}
                        onCancel={() => {
                          setIsPopUpShown(false);
                        }}
                        content={cooperation.learnMore?.content || []}
                      />
                    );
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
