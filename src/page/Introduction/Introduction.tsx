import "./Introduction.scss";
import introduction_run from "../../static/image/introduction_run.svg";
import introduction_p1 from "../../static/image/introduction_p1.svg";
import introduction_p2 from "../../static/image/introduction_p2.png";
import introduction_p3 from "../../static/image/introduction_p3.png";
import introduction_p4 from "../../static/image/introduction_p4.svg";
import introduction_p5 from "../../static/image/introduction_p5.svg";
// import introduction_p4 from "../../static/image/introduction_p4.svg";
import { MyButton } from "../../common/component/MyButton/MyButton";
import { BlockTitle } from "../../common/component/BlockTitle/BlockTitle";
export const Introduction: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <div id="introduction" className="introduction_container">
      <BlockTitle title="改變環境，從起步開始" subTitle="活動介紹" />
      <div
        className={`animation introduction_element_container${
          isMobile ? "_mobile" : ""
        }`}
      >
        <div className="introduction_element">
          <img
            style={{ width: "100%" }}
            src={introduction_p1}
            alt="introduction_p1"
          />
        </div>
        <div className="introduction_element">
          <div style={{ marginTop: "10px" }}>
            <span className="noto_24">用雙腳，感受大地的好</span>
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
        className="animation_left"
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          margin: "50px 0",
        }}
      >
        {[
          {
            title: "我們的目標",
            content: "5年種植 10萬棵樹",
            image: introduction_p2,
          },
          {
            title: "生態環境教育",
            content: "恢復台灣生物多樣性",
            image: introduction_p3,
          },
        ].map((info, index) => {
          return (
            <div
              style={{
                position: "relative",
                flex: 1,
                marginTop: isMobile ? "0px" : "20px",
                height: "200px",
                // background: index ? "#0093C1" : "#00A59B",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // padding: "40px 0px",
                // paddingLeft: isMobile ? "" : "10%",
              }}
              key={info.title}
            >
              <img
                src={info.image}
                alt={info.image}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  zIndex: -1,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isMobile ? "center" : "flex-start",
                  margin: "40px 0px",
                  paddingLeft: isMobile ? "" : "15%",
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
      <div className="animation" style={{ marginTop: "60px", padding: "0 5%" }}>
        <span className="mont_24 green">現在，跟我們一起 RUN FOR GREEN！</span>
      </div>
      <div className="animation" style={{ marginTop: "60px" }}>
        <img
          style={{ width: isMobile ? "95%" : "" }}
          src={introduction_run}
          alt="introduction_run"
        />
      </div>
      <div
        className="animation"
        style={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          padding: "0 5%",
        }}
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
      <MyButton
        text="獲得樹苗"
        className="animation"
        style={{
          fontFamily: "Noto Sans TC",
          fontWeight: 500,
          width: "150px",
          margin: "30px auto",
        }}
        onClick={() => {
          if (window.confirm("富邦金控為本活動主辦單位，是否開啟樹木種植頁?")) {
            window.open("https://rfg.bravelog.tw/");
          }
        }}
      />
      <div>
        <img
          className="animation"
          style={{ width: "100%" }}
          src={isMobile ? introduction_p5 : introduction_p4}
          alt={isMobile ? introduction_p5 : introduction_p4}
        />
      </div>
    </div>
  );
};
