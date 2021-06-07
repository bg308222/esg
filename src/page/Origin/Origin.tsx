import "./Origin.scss";
import origin_box from "../../static/image/origin_box.svg";
import temp from "../../static/image/temp.svg";
import {
  LearnMoreButton,
  LearnMoreContent,
} from "../../common/component/LearnMore/LearnMore";
import { IPopUp } from "../Layout/type";
import { ContentType } from "../../common/component/LearnMore/type";

export const Origin: React.FC<{ isMobile: boolean; popUp: IPopUp }> = ({
  isMobile,
  popUp: { setIsPopUpShown, setPopUpContent },
}) => {
  return (
    <div id="origin" className="origin_container">
      <div>
        <span className="noto_24 bold">森林，</span>
        <span className="noto_24">是讓台完這座島嶼生氣蓬勃的重要命脈。</span>
      </div>
      <div className="origin_description">
        <span className="noto_16">
          臺灣處於熱帶與亞熱帶交界，加上海拔高度的差異，島上擁有從熱帶林到寒帶林等多元的林相，全島約60％的面積受森林覆蓋，豐富多元的樹種更是大大小小生物的最佳庇護所。然而，地球上的樹木每年約消失150億棵，相當於每分鐘消失48個足球場的面積；台灣的樹木，也正一點一滴的離我們遠去。
        </span>
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
              setIsPopUpShown(true);
              setPopUpContent(
                <LearnMoreContent
                  title="逆風而生的植樹精神 程禮怡：「馬拉松與種樹都是意志力的展現」"
                  isMobile={isMobile}
                  onCancel={() => {
                    setIsPopUpShown(false);
                  }}
                  content={[
                    {
                      type: ContentType.text,
                      text: "慈心有基農業基金會海岸造林組（以下簡稱慈心基金會），從2010年開始種樹計畫，在都市裡、平地上或是任何陸地上需要的地方種植樹木。在種樹種了一段時間之後，發現陸地上的、高山裡的樹木種植都已經飽和，「能種的地方都差不多了，那麼還有哪裡可以種呢？」慈心有機農業基金會海岸造林組總監程禮怡發現：海岸是很少人會去種樹，卻也最需要種樹的地方。因緣際會之下，2015年認養了「台西海園」，就此展開了一連串「海岸造林」的美妙旅程。",
                    },
                    {
                      type: ContentType.text,
                      text: "「臺灣是個海島國家。」這句話如果單純只用口頭輕描淡寫而過，總讓人覺得遙遠、模糊、身不關己。程禮怡不疾不徐地推演、慢慢展示說道：「可是你仔細一瞧喔，臺灣本島海岸線綿延長達1,200公里，22個縣市裡面，有19個縣市的邊壤都和海岸連接。」島嶼和海洋的關係，這一刻就變得立體起來。",
                    },
                    {
                      type: ContentType.image,
                      url: "data:image/jpeg;base64,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",
                      subTitle: "慈心總監程禮怡。",
                    },
                    {
                      type: ContentType.title,
                      text: "北海岸怎麼種樹？擋沙是首要任務",
                    },
                    {
                      type: ContentType.text,
                      text: "北海岸要面臨的，是強風將沙灘上的沙粒吹起後漫天風舞的問題，在該地種樹，成功的關鍵就是「擋沙」。每年東北季風吹起海岸地的沙石，若剛好碰上大潮，強大力量的海浪更會被拍打到沙地的上方，風吹浪打之下，海岸線泳退的速度加劇，若不改善，地基也將漸漸低於海平面並且被吞噬。",
                    },
                    {
                      type: ContentType.text,
                      text: "而離海岸稍微遠一些的地方，雖然不太有暴潮發生，但由於位處丘陵的迎風面，風沙飄揚也影響鄰近社區。慈心基金會團隊也實際測量溫度變化，在有種樹的樹蔭底下是40℃，而沒有種植樹木的沙灘在夏季溫度甚至能直逼90℃，「我都說真正的85度C在這裡！」程禮怡說，不只風砂，炎熱逼仄的氣溫也影響了居民的生活品質。",
                    },
                    {
                      type: ContentType.text,
                      text: "而離海岸稍微遠一些的地方，雖然不太有暴潮發生，但由於位處丘陵的迎風面，風沙飄揚也影響鄰近社區。慈心基金會團隊也實際測量溫度變化，在有種樹的樹蔭底下是40℃，而沒有種植樹木的沙灘在夏季溫度甚至能直逼90℃，「我都說真正的85度C在這裡！」程禮怡說，不只風砂，炎熱逼仄的氣溫也影響了居民的生活品質。",
                    },
                  ]}
                />
              );
            }}
          />
        </div>
      </div>
      <div className={`origin_element_container${isMobile ? "_mobile" : ""}`}>
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
                    style={{ marginTop: "10px", marginBottom: "10px" }}
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
