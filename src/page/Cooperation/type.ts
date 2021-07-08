import cooperation_p1 from "../../static/image/cooperation_p1.svg";
import cooperation_p2 from "../../static/image/cooperation_p2.svg";
import cooperation_p3 from "../../static/image/cooperation_p3.svg";

export interface ICooperation {
  imageUrl: string;
  title: string;
  content: string;
  learnMore?: any;
}

export const fakeCooperations: ICooperation[] = [
  {
    imageUrl: cooperation_p1,
    title: "財團法人慈心有機發展協會",
    content:
      "「慈心有機農業發展基金會」成立於1997年，希望藉推廣有機農作來帶動社會大眾關心健康、關愛大地、關懷生命。自2010年起，開始在全省提倡種樹護林的行動，北從基隆，南至屏東，乃至海外。目前有將近10萬5千人次，種下超過68萬2千棵樹苗。",
  },
  {
    imageUrl: cooperation_p2,
    title: "山林復育協會",
    content:
      "「臺灣山林復育協會」成立於2016年，核心目的是推動本土的生態教育，進行自然棲地的保護，在地種源的復育，及推動廢耕山坡地順應演替復育為自然森林的工作。更曾在2018年與台中市政府合作，投入為期一年的大肚山天然林復育研究。",
  },
  {
    imageUrl: cooperation_p3,
    title: "愛種樹協會",
    content:
      "2014年一群校長和企業人士，成立了高雄愛種樹協會，宗旨為「種樹護地球」、「植樹到天邊、綠蔭滿人間」希望透過協會的推廣，在全台種下3000萬棵樹，促使全球綠覆率翻倍並透過教育推廣扎根，以育苗、造林、護林為行動，為地球留住元氣。",
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
