import {
  ContentType,
  ILearnMoreContent,
} from "../../common/component/LearnMore/type";
import { cooperationImage } from "../../static/image/cooperation";

export interface ICooperation {
  imageUrl: string;
  title: string;
  content: string;
  learnMore?: Omit<ILearnMoreContent, "isMobile">;
}

export const fakeCooperations: ICooperation[] = [
  {
    imageUrl: cooperationImage.info1.title,
    title: "財團法人慈心有機發展協會",
    content:
      "「慈心有機農業發展基金會」成立於1997年，希望藉推廣有機農作來帶動社會大眾關心健康、關愛大地、關懷生命。自2010年起，開始在全省提倡種樹護林的行動，北從基隆，南至屏東，乃至海外。目前有將近10萬5千人次，種下超過68萬2千棵樹苗。",
    learnMore: {
      title: "逆風而生的植樹精神 程禮怡：「馬拉松與種樹都是意志力的展現」",
      content: [
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
          url: cooperationImage.info1.p1,
          subTitle: "慈心總監程禮怡。",
        },
        {
          type: ContentType.text,
          text: "「海岸線那麼重要，為什麼這麼少人做？」程禮怡回答：「因為很難啊！」不過，「難」對她來說不是藉口，她更把它更做一種墊腳石，一步一步踩著堅毅步伐，2018年種下36顆樹木，2019年數字來到52棵，當眾人都拍掌鼓舞、直呼厲害的時候，程禮怡謙虛地說：「其實要看長遠啦，我們希望能夠（樹木）翻倍最好。」她接續講，「我們自己做然後做起來也很好，如果做了有其他聲音、資源加進來那也很棒。其實就是一種拋磚引玉。」",
        },
        {
          type: ContentType.text,
          text: "2021年，富邦金控一甲子的這刻，決心要接下這塊磚、擲出手中的玉，響應現在迫切需要被關注的環境永續議題，與慈心有機農業基金會攜手合作，一同復育台江國家公園沙洲與北海岸金山一帶。",
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
          text: "不過，若是種植適切的樹種在海岸地，就能扭轉頹勢了。",
        },
        {
          type: ContentType.text,
          text: "以沙珠灣來說，當地的沙在水澆灌下去不容易滲入，就像塗了一層油，像穿了一層防潑水外套。踩到了「地雷」，程禮怡使出渾身解數「拆彈」，選用不怕土淹的林投樹，而耐水浸泡的黃槿用「水寶盆」輔佐它穩定長出樹苗，附近還裝了灌溉系統，迎戰砂質疏鬆、水源易流失的困難，更聘請了一位專門人員在必要時候「土法煉鋼」人為澆水，就是要讓樹苗茁壯起來，保護這片海岸地。",
        },
        {
          type: ContentType.image,
          url: cooperationImage.info1.p2,
          subTitle: "照片說明照片說明照片說明照片說明照片說明照片說明。",
        },
        {
          type: ContentType.title,
          text: "集所有海岸造林挑戰於一身的台江國家公園",
        },
        {
          type: ContentType.text,
          text: "台江國家公園擁有特殊的潟湖地形，隨著洋流經過的魚蝦貝類在這片內海產卵、避寒，讓台江甚至有「台灣海峽的魚類基因庫」之美稱。然而，潟湖沙洲受海水鹽分的侵襲很直接，週遭也有不少硬體工程，再加上，上游曾文溪順流而下的沙源越來越少，這一塊沙洲也逐漸變窄。",
        },
        {
          type: ContentType.text,
          text: "面對海浪的拍打，消坡塊應該是最直接、最常見的做法，對嗎？程禮怡卻搖搖頭說：「絕對不行。」消坡塊表面上看起來是把浪給擋住了，不過浪潮回彈的力量可能是侵襲上來的兩倍，強力的浪勢會掏空消坡塊底下的沙，「留不住沙，土地還是會消得很快。」而潟湖面臨的挑戰還不只是波濤而已，當地的地下水位高、水分帶有些許鹽度，幾十年前種下的木麻黃林也已開始衰老，固沙護土的功能變得薄弱；若是遇到暴潮期間，海水更是絕情貪婪地潮土地一湧而上。如臨千萬大敵般的台江潟湖，讓實戰經驗豐富的程禮怡也不禁感嘆：「這真的是綜合所有海岸造林的挑戰。」",
        },
        {
          type: ContentType.image,
          url: cooperationImage.info1.p3,
          subTitle: "照片說明照片說明照片說明照片說明照片說明照片說明。",
        },
        {
          type: ContentType.text,
          text: "面對這般險境，程禮怡和團隊精密詳實地，把當地劃分出「窄域沙丘」、「破空林」和「紅樹林」三個區塊，各個擊破。",
        },
        {
          type: ContentType.text,
          text: "「窄域沙丘」區域是臨海最前線，已經身形清瘦的沙洲一旦破出缺口，潟湖的生態也將被破壞，是該地最急需種樹的區塊。在海砂淤積的第一道防線，即使被「活埋」都能生存下來的林投樹打頭陣，耐旱的特質也讓它能在逆境中成長，根系更能到土中兩、三米之深，鞏固土壤。另外，也選擇耐得了鹽份、風吹的白千層和檉柳加入沙丘保衛戰隊；「破空林」區域則是在現有衰老的木麻黃林裡面，加入耐水的海檬果、黃槿，耐鹽的蘭里、土城香和檉柳等「生力軍」，相繼在此區域守護海岸；而面對潟湖的「紅樹林」區域，除了繼續維護紅樹林生態之外，還會種植檉柳，幫忙抵擋強風吹拂。豐富多元的樹種，層層守護把關，以不同樹種的擅長「技能」迎戰台江。",
        },
        {
          type: ContentType.title,
          text: "拋磚引玉，和時間賽跑的永續行動",
        },
        {
          type: ContentType.text,
          text: "海岸造林計劃看起來幾乎是嚴實縝密，絕無一疏，然而程禮怡卻語重心長地說：「光是種樹，可能真的不夠。」用種樹先克服了大自然出的功課，長遠來看，還有「核心問題」必須正視。",
        },
        {
          type: ContentType.image,
          url: cooperationImage.info1.p4,
          subTitle: "照片說明照片說明照片說明照片說明照片說明照片說明。",
        },
        {
          type: ContentType.text,
          text: "程禮怡就說，台江國家公園其實非常缺沙，她已經料想到在台江種樹可能面臨「唱衰」，被認為以目前環境的變化來說，種樹根本不夠。「但如果我們不出手，這塊地是不是就真的完全要被忽略了？」程禮怡清楚缺沙是台江潛藏的致命危機，而她希望能透過海岸造林拋磚引玉，「我們種下去之後，可能大家會出來說：『這裡需要沙』。沒錯，我也認為這裡的確沙。說不定就能帶動這個議題，挹注更多專家或資源，讓這塊地變得更完備。」她語氣堅定地說。",
        },
        {
          type: ContentType.text,
          text: "氣候變遷迫在眉睫，下雨天數逐漸減少，旱季的時間也越來越長，慈心基金會專利的「水寶盆」技術雖然能輔助樹苗發育，不過自然的雨水澆灌才能樹種真正成長良好。程禮怡就舉例，有一種植樹工法是在連續雨天時期種下樹苗，是非常傳統且典型的工法，然而雨季不夠之際，造林時程就得拉得更長，「換一句話說，也就是海洋會越來越接近我們。」海岸造林不只要戰勝當地環境條件，現在更得加緊腳步，和時間賽跑。",
        },
        {
          type: ContentType.image,
          url: cooperationImage.info1.p5,
          subTitle: "照片說明照片說明照片說明照片說明照片說明照片說明。",
        },
        {
          type: ContentType.title,
          text: "富邦「Run for Green」守護台灣植樹計畫   全力奔向綠色",
        },
        {
          type: ContentType.text,
          text: "守護環境是跟時間賽跑，然而，跑步確實能化永續為行動。富邦金控今年迎來第六十週年，揭示全新品牌理念「正向力量 成就可能」（Be positive All possible），也決心朝更加永續的企業邁進，為人與土地共創共榮共好的未來。其中「Run for Green」ESG倡議活動期許在五年之內為全台跑者種下十萬顆樹木。",
        },
        {
          type: ContentType.text,
          text: "身為唯一贊助台灣四大馬拉松賽事之金融業，從北部的萬金石馬拉松、臺北馬拉松，至中部的田中馬拉松，與南部高雄馬拉松，富邦金控皆致力於推廣運動及支持國內體育發展。「Run for Green」倡議活動透過和數個關注環境議題的單位合作，逐步尋找、分析各個台灣急需種植樹木、復育生態的重點地帶。無論你是馬拉松賽事的參與者，或是平日就有跑步運動習慣的跑者，透過「Run for Green」倡議活動網站，即可將你的運動軌跡轉換成對環境的一份心。",
        },
        {
          type: ContentType.text,
          text: "程禮怡對「Run for Green」倡議活動也持肯定態度：「我們種樹需要靠意志力去成就，跑馬拉松也是一樣啊！過程都會遇到很多困難、想放棄，但還要撐下去。」憑藉著不屈不撓的意志力，跑者不僅獲得運動上的成就，更能將跑過的點滴化為實際行動，共同為環境永續盡一份心力。",
        },
        {
          type: ContentType.text,
          text: "維繫種下的樹木，進而促進整體環境的永續，有賴全民共識。和社會大眾「跑」在一起的「Run for Green」倡議活動只是起跑點，透過更多人響應，一同守護臺灣美麗且珍貴的自然環境，創造共榮共好的未來，全力奔向綠色。",
        },
        {
          type: ContentType.image,
          url: cooperationImage.info1.p6,
          subTitle: "照片說明照片說明照片說明照片說明照片說明照片說明。",
        },
      ],
    },
  },
  {
    imageUrl: cooperationImage.info2.title,
    title: "山林復育協會",
    content:
      "「臺灣山林復育協會」成立於2016年，核心目的是推動本土的生態教育，進行自然棲地的保護，在地種源的復育，及推動廢耕山坡地順應演替復育為自然森林的工作。更曾在2018年與台中市政府合作，投入為期一年的大肚山天然林復育研究。",
    learnMore: {
      title: "山林復育，從一顆種子開始",
      content: [
        {
          type: ContentType.text,
          text: "2021年，富邦歡慶六十歲生日！將於台北、台中、高雄、花蓮四地舉辦「Run for Green」ESG倡議計畫，與跑者串連，表達對環境的關懷與關心，預在全台種下十萬棵樹。",
        },
        {
          type: ContentType.text,
          text: "2020年起，富邦金控開始贊助「台灣米倉」田中馬拉松，成為唯一贊助「台灣品牌國際賽事」四大馬拉松賽事的金融機構。成立於2016年的臺灣山林復育協會是Run for Green計畫的中部地區合作單位，選定台中市大安區南埔溪口旁的海岸保安林和花蓮七星潭的保安林進行復育。",
        },
        {
          type: ContentType.text,
          text: "「協會的工作重點包括推動本土生態教育、保護自然棲地，復育在地種源，及推動廢耕山坡地順應演替復育為自然森林。」創會理事長、現任執行長蔡智豪說，我們期待為企業、公部門和非營利組織三方搭建的協作平台。",
        },
        {
          type: ContentType.title,
          text: "復育，種對才是根本",
        },
        {
          type: ContentType.text,
          text: "根據林務局定義，保安林的功能是保育水土與防護自然災害。台灣現有保安林共524處，面積約47萬公頃；其中海岸林位在海陸交界處，生態極為敏感，廣義的海岸林包括海岸防風林、飛砂防止林、潮害防備林及漁業保安林等。無奈，台灣海岸受到人為干擾，海岸林幾乎破壞殆盡。「海岸林植栽目的是防風定砂、保護土地不被風蝕，造成表土養分喪失。」蔡智豪談到，目前僅存較為完整的海岸天然林為墾丁砂島至船帆石間的香蕉灣一帶，全長1.5公里，面積約28公頃，目前由墾丁國家公園劃定為生態保護區。",
        },
        {
          type: ContentType.text,
          text: "「海岸林復育，首先要了解海岸的立地基質。如河口濕地，這裡的環境泥濘積水，植物不太容易生長，多樣性相對較低，植被類型就是紅樹林，北部以水筆仔為主，南部則為海茄苳。種錯了就白忙一場，人無法對抗大自然。」蔡智豪說道。海岸林樹種有別於內陸型森林樹種，這些種類能忍受強勁的海風、鹽沫、土壤鹽化的環境。「果實與種子隨著洋流散播，再經由海浪拍擊送到岸上。上岸後的種子陸續發芽，不同的種類，各自發揮功能，形成較穩定的環境後，這個區域最後再經由演替發展為海岸林。」蔡智豪說。",
        },
        {
          type: ContentType.title,
          text: "育苗，由在地社團協力",
        },
        {
          type: ContentType.text,
          text: "在台中的復育地點，為東勢林管處提供的台中市大安區南埔溪口旁的海岸保安林。",
        },
        {
          type: ContentType.text,
          text: "此復育計畫為了加深與在地社福團體的合作，蔡智豪提到，例行的苗木照顧工作，如苗盆雜草清除、育苗拌土、澆水、環境整理等，將與財團法人瑪利亞社會福利基金會所轄的瑪利媽媽清潔高手工作隊先鋒隊」合作，讓生活可以自理的身心障礙者藉由參與工作，獲得收入，使之活得更有自信。",
        },
        {
          type: ContentType.image,
          url: cooperationImage.info2.p1,
          subTitle: "位於台中的大肚山森林復育中心。",
        },
        {
          type: ContentType.text,
          text: "花蓮的復育地點，為花蓮林管處提供的的七星潭海岸保安林。",
        },
        {
          type: ContentType.text,
          text: "「花蓮海岸有銀合歡入侵問題，解決方法將透過現地調查研究，釐清可以與銀合歡競爭的在地原生喬木植物有哪些？再於銀合歡林中進行孔隙補植，把這些樹種進去。」蔡智豪說，解決銀合歡的問題，應要透過演替，而不是一味地清除，但演替作法目前尚未有實際的試驗與研究資料。不過依學理的推論，銀合歡是不耐陰性的植物，當海岸林或內陸型的喬木類植物長高後，樹冠遮住陽光，形成陰暗的環境，銀合歡會逐漸萎縮消失，土壤的種子也沒有發芽的機會。「我們是試驗，也是示範。」蔡智豪說，花蓮復育計畫前四年的目標是希望藉由試驗資料，來修訂編寫防治銀合歡的作業規範，希望這些成果能提供相關單位參考。",
        },
        {
          type: ContentType.image,
          url: cooperationImage.info2.p2,
          subTitle: "計畫復育的之一花蓮七星潭海岸保安林",
        },
        {
          type: ContentType.title,
          text: "種的是樹，萌芽的是族人的回憶",
        },
        {
          type: ContentType.text,
          text: "花蓮豐濱鄉磯崎村的高山部落是在地的合作夥伴，此計畫將在部落裡育苗，培養在地人才。這一切的緣分要從朋友都叫他「小馬」的馬中原，他的心願說起。小馬來自族群多元的花蓮豐濱鄉磯崎村，當地有阿美族、撒奇萊雅族、布農族，布農族的小馬目前擔任磯崎村的部落聯合會議主席。一心為部落做事的小馬說，「有生之年，讓傳統領域的原來的森林都回來，是我最大的心願。」",
        },
        {
          type: ContentType.text,
          text: "磯崎村的高山部落後方一路綿延到海岸山脈的稜線上，是部落的傳統領域。「五十年前，因中華紙漿廠造紙需求，伐木取材，森林就不見了。」蔡智豪轉述，林務局發馬拉巴栗樹苗給部落種。「部落長輩發現，種下去的都不是原本的樹，原本的植物不見了，動物也跟著不見了。」蔡智豪對小馬說，我來幫你吧！但有一個前提，部落的須自己育苗；我教你採種子、做苗圃、育苗。",
        },
        {
          type: ContentType.text,
          text: "「多數年輕人選擇到大城市打工，一個工作機會可以支撐起一個家庭。」曾經想離開的「小馬」最懂，人外流，文化就斷掉了。蔡智豪說，此次花蓮地區負裕，有了富邦資源的挹注，部落的人終能留下了。一旦能在當地多產生一個工作機會，就能讓當地原住民多撐住一個家，傳統文化得以延續。",
        },
        {
          type: ContentType.text,
          text: "「復育工作不只三年、五年，而是長達二十年以上的工程，是一個世代。」蔡智豪說，在森林工作，不用出去外縣市打工，透過富邦及社會大眾的支持，一個工作機會足以撐起一個家庭。「山林要靠誰來守護？社會需要透過企業社會責任的資源，建立起一個支持系統，一個復育與守護山林的理想循環。」蔡智豪說，富邦承擔起頭的任務，從七星潭海岸林的一公頃開始，希望陸續完成三百五十公頃的海岸林復育，進而完成磯崎村高山部落傳統領域的森林復育。",
        },
        {
          type: ContentType.text,
          text: "此次與富邦金控的合作，蔡智豪也表示能將自然環境與跑步運動結合，是一件更加深環境教育的計畫。讓跑者、社會大眾，不僅是隔岸觀火似的看著企業種樹，而是透過親身參與，一起努力讓環境更美好。「山林復育和馬拉松的過程相似，一切從零開始，持之以恆，全憑意志力。」蔡智豪說，復育從一顆種子開始，馬拉松從起點開始，沒有捷徑。正如歡慶六十周年的富邦金控擔下孕育百年樹人的使命，眺望百年企業的未來。",
        },
      ],
    },
  },
  {
    imageUrl: cooperationImage.info3.title,
    title: "愛種樹協會",
    content:
      "2014年一群校長和企業人士，成立了高雄愛種樹協會，宗旨為「種樹護地球」、「植樹到天邊、綠蔭滿人間」希望透過協會的推廣，在全台種下3000萬棵樹，促使全球綠覆率翻倍並透過教育推廣扎根，以育苗、造林、護林為行動，為地球留住元氣。",
    learnMore: {
      title: "高雄市愛種樹協會",
      content: [
        {
          type: ContentType.text,
          text: "2014年，一群校長和企業人士，秉持著「種樹護地球」、「植樹到天邊、綠蔭滿人間」的信念，成立了高雄愛種樹協會，希望透過協會的推廣，在全台種下3000萬棵樹，促使全球綠覆率翻倍並透過教育推廣扎根，以育苗、造林、護林為行動，為地球留住元氣。",
        },
        {
          type: ContentType.image,
          url: cooperationImage.info3.p1,
          subTitle:
            "愛種樹協會目前主要共有「種樹撫育」、「教育推廣」、「育苗送苗」、「環境營造」四大綠色行動。",
        },
        {
          type: ContentType.text,
          text: "透過種樹撫育的行動，從撿種、育苗開始，悉心灌溉用心呵護，為大地守護一片森機。培育的樹苗以原生樹種為主，成苗後再種回大地上，並保留部分小苗，配合種樹理念推廣贈送。",
        },
        {
          type: ContentType.text,
          text: "此外，亦透過「環境教育」，將大自然帶給人類的信念，傳遞給更多人。從教育著手，向下扎根、向外擴展，拉近人們與土地、山林的距離。一起親近自然，進而喜愛大自然，慢慢地加入行動保護環境。",
        },
        {
          type: ContentType.text,
          text: "協會於小林村及小港大坪頂認養公有土地，做為種樹造林的基地，定期澆水除草並持續撫育確保樹種存活，以實際環境營造行動為地球增加綠覆率，給生態系統一個喘息的時間，匯聚你我的力量，讓大地得以恢復生機，讓下一代擁有更多選擇的機會。",
        },
      ],
    },
  },
  // {
  //   imageUrl: "",
  //   title: "愛種樹協會",
  //   content:
  //     "2014年一群校長和企業人士，成立了高雄愛種樹協會，宗旨為「種樹護地球」、「植樹到天邊、綠蔭滿人間」希望透過協會的推廣，在全台種下3000萬棵樹，促使全球綠覆率翻倍並透過教育推廣扎根，以育苗、造林、護林為行動，為地球留住元氣。",
  // },
  // {
  //   imageUrl: "",
  //   title: "OOO 協會",
  //   content:
  //     "「OOO 復育協會」成立於20xx年，核心目的是推動本土的生態教育，進行自然棲地的保護，在地種源的復育，及推動廢耕山坡地順應演替復育為自然森林的工作。更曾在20xx年與政府合作，投入為期一年的天然林復育研究。",
  // },
  // {
  //   imageUrl: "",
  //   title: "OOO 協會",
  //   content:
  //     "「OOO 復育協會」成立於20xx年，核心目的是推動本土的生態教育，進行自然棲地的保護，在地種源的復育，及推動廢耕山坡地順應演替復育為自然森林的工作。更曾在20xx年與政府合作，投入為期一年的天然林復育研究。",
  // },
];
