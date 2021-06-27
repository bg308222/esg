import "./Origin.scss";
import origin_box from "../../static/image/origin_box.svg";
import temp from "../../static/image/temp.svg";
import { LearnMoreButton } from "../../common/component/LearnMore/LearnMore";
import { IPopUp } from "../Layout/type";

export const Origin: React.FC<{ isMobile: boolean; popUp: IPopUp }> = ({
  isMobile,
  popUp: { setIsPopUpShown, setPopUpContent },
}) => {
  return (
    <div id="origin" className="origin_container">
      <div
        style={{
          backgroundColor: "#FBFBFB",
          padding: "70px 0",
          marginTop: "-10px",
        }}
      >
        <div>
          <span className="noto_24 bold" style={{ fontWeight: 700 }}>
            森林，
          </span>
          <span className="noto_24" style={{ fontWeight: 400 }}>
            是讓台完這座島嶼生氣蓬勃的重要命脈。
          </span>
        </div>
        <div className="origin_description">
          <span className="noto_16">
            臺灣處於熱帶與亞熱帶交界，加上海拔高度的差異，島上擁有從熱帶林到寒帶林等多元的林相，全島約60％的面積受森林覆蓋，豐富多元的樹種更是大大小小生物的最佳庇護所。然而，地球上的樹木每年約消失150億棵，相當於每分鐘消失48個足球場的面積；台灣的樹木，也正一點一滴的離我們遠去。
          </span>
        </div>
      </div>
      <div className={`origin_element_container${isMobile ? "_mobile" : ""}`}>
        <div className="origin_element">
          <img style={{ width: "100%" }} src={temp} alt="temp" />
        </div>
        <div className="origin_element">
          <div>
            <span className="mont_14">實現正向的力量！</span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <span className="bai_24">綠色企業永續經營願景工程</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="mont_16">
              因應企業永續經營所面臨的風險及其所帶來的機會與挑戰，富邦金控自2015年起展開「永續經營（ESG）願景工程」。
              運用核心職能持續深化對應聯合國永續發展目標（Sustainable
              Development Goals,
              SDGs）之行動方案，深化永續經營之各項作為，逐步落實 SDGs 中所對應的
              16
              個目標，促進永續且包容的經濟成長、社會發展與環境保護，以提升企業競爭力，發揮金融影響力。
            </span>
          </div>
          <LearnMoreButton
            onClick={() => {
              window.open("https://www.fubon.com/esg/index.html");
            }}
          />
        </div>
      </div>
      <div
        style={{ backgroundColor: "#FBFBFB" }}
        className={`origin_element_container${isMobile ? "_mobile" : ""}`}
      >
        <div className="origin_element">
          <div style={{ marginTop: "10px" }}>
            <span className="bai_24">減少溫室氣體的最佳隊友！</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="mont_16">
              氣候變遷發生得越來越劇烈，減緩溫室氣體排放刻不容緩，而森林在其中便扮演了極為重要的一角。為什麼會這麼說呢？答案是「碳匯」。
              森林碳匯指的是，「森林植物透過光合作用，把大氣中的二氧化碳吸收並固定在植物與土壤中，進而減少大氣裡二氧化碳濃度」的過程。工廠、汽機車能源燃燒等，是一般大眾較能感受、有連結的碳排放來源，不過其實全球每年有大約20％的碳排放，原因就來自森林的消失。
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {[
              { title: "樹木砍伐", content: "每年全台約有OO的樹木遭到砍伐。" },
              {
                title: "水土流失 ",
                content: "每年全台因侵蝕所造成的水土流失約OOO噸。",
              },
            ].map((info) => {
              return (
                <div
                  key={info.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    marginTop: "15px",
                  }}
                >
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={origin_box}
                    alt="origin_box"
                  />
                  <span
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                    className="mont_16"
                  >
                    {info.title}
                  </span>
                  <span className="mont_14">{info.content}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="origin_element">
          <img style={{ width: "100%" }} src={temp} alt="temp" />
        </div>
      </div>
    </div>
  );
};
