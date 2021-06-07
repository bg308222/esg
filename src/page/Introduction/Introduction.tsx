import "./Introduction.scss";
import introduction_run from "../../static/image/introduction_run.svg";
import temp from "../../static/image/temp.svg";
import { MyButton } from "../../common/component/MyButton/MyButton";
export const Introduction: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div id="introduction" className="introduction_container">
      <div>
        <span className="mont_14">活動介紹</span>
      </div>
      <div className="part_title">
        <span className=" bai_32">改變環境，從起步開始</span>
      </div>
      <div
        className={`introduction_element_container${isMobile ? "_mobile" : ""}`}
      >
        <div className="introduction_element">
          <img style={{ width: "100%" }} src={temp} alt="temp" />
        </div>
        <div className="introduction_element">
          <div style={{ marginTop: "10px" }}>
            <span className="bai_24">用雙腳，感受大地的好</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="mont_16">
              2020年起，富邦金控成為台灣唯一贊助國際品牌四大馬拉松的金融業者。
              2021年，富邦金控已在台深耕60周年，我們深愛台灣這片土地，期望能盡一己之力，回饋社會，追求「共好，共榮」。
              <br />
              <br />
              富邦以「四大馬拉松賽事」運動為平台，是跑者踏上綠色旅程的第一步！
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          margin: "50px 0",
        }}
      >
        {[
          { title: "我們的目標", content: "5年種植 10萬棵樹" },
          { title: "保護台灣物種多樣性", content: "降低碳排量約OOO頓 " },
        ].map((info, index) => {
          return (
            <div
              style={{
                flex: 1,
                marginTop: isMobile ? "0px" : "20px",
                height: "200px",
                background: index ? "#0093C1" : "#00A59B",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "40px 0px",
                paddingLeft: isMobile ? "" : "10%",
              }}
              key={info.title}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isMobile ? "center" : "flex-start",
                }}
              >
                <span style={{ marginBottom: "10px" }} className="mont_24">
                  {info.title}
                </span>
                <span className="mont_32">{info.content}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "60px" }}>
        <span className="mont_24 green">現在，跟我們一起 RUN FOR GREEN！</span>
      </div>
      <div style={{ marginTop: "60px" }}>
        <img
          style={{ width: isMobile ? "95%" : "" }}
          src={introduction_run}
          alt="introduction_run"
        />
      </div>
      <div
        style={{ marginTop: "60px", display: "flex", flexDirection: "column" }}
      >
        <span className="mont_16">
          不論你是享受速度的跑步咖，還是熱愛走路的健走咖，你的每一步，都是改變未來的行動力！
        </span>
        <span className="mont_16">
          註冊登入會員後，於富邦四大馬拉松中任選場次，總計完成
          40公里賽程，即可於線上認養一棵樹苗。
        </span>
        <span className="mont_16">
          並選擇你所關注的環境議題和種植地點，讓你的行動力轉化為正向的力量！
        </span>
      </div>
      <MyButton text="獲得樹苗" style={{ margin: "30px auto" }} />
      <div>
        <img style={{ width: "100%" }} src={temp} alt="temp" />
      </div>
    </div>
  );
};
