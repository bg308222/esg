import { checkIsWindowMobile } from "../../page/Layout/Layout";

export enum Router {
  header = "header",
  home = "home",
  origin = "origin",
  introduction = "introduction",
  cooperation = "cooperation",
}

export const switchRouter = (target: Router) => {
  const main = document.getElementsByClassName("main")[0];
  if (target === Router.header || target === Router.home) {
    main.scrollTo({ behavior: "smooth", top: 0 });
  } else {
    const element = document.getElementById(target);
    if (element) {
      main.scrollTo({
        behavior: "smooth",
        top: element.offsetTop - 30 - (checkIsWindowMobile() ? 50 : 0),
      });
    }
  }
};

export const getCurrentRoute = (currentYOffset: number) => {
  const result = [
    Router.home,
    Router.origin,
    Router.introduction,
    Router.cooperation,
  ].reduce(
    (p, route) => {
      const _p = { ...p };
      if (_p.isEnd) return _p;
      const { offsetTop } = document.getElementById(route) as HTMLElement;
      if (currentYOffset + 110 < offsetTop) {
        _p.isEnd = true;
      } else {
        _p.target = route;
      }
      return _p;
    },
    {
      target: Router.home,
      isEnd: false,
    }
  );
  return result.target;
};
