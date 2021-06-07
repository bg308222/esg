import { Router } from "../../common/helper/router";

export const NAVBARS = [
  { key: Router.home, value: "首頁" },
  { key: Router.origin, value: "計畫起源" },
  { key: Router.introduction, value: "活動介紹" },
  { key: Router.cooperation, value: "合作單位" },
];

export interface IPopUp {
  setIsPopUpShown: React.Dispatch<React.SetStateAction<boolean>>;
  setPopUpContent: React.Dispatch<
    React.SetStateAction<JSX.Element | undefined>
  >;
}
