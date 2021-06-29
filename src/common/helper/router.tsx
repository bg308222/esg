import { checkIsWindowMobile } from "../../page/Layout/Layout";

export enum Router {
  header = "header",
  home = "home",
  origin = "origin",
  introduction = "introduction",
  cooperation = "cooperation",
}

const scrollTo = async (top: number) => {
  const element = document.getElementsByClassName("main")[0];
  if (element.scrollTop > top) {
    while (Math.round(element.scrollTop) !== Math.round(top)) {
      await new Promise((res) => {
        setTimeout(() => {
          element.scrollTop -= Math.pow(element.scrollTop - top, 0.6);
          res(1);
        }, 10);
      });
      if (element.scrollTop < top) {
        element.scrollTop = top;
      }
    }
  } else if (element.scrollTop < top) {
    while (Math.round(element.scrollTop) !== Math.round(top)) {
      await new Promise((res) => {
        setTimeout(() => {
          element.scrollTop += Math.pow(top - element.scrollTop, 0.6);
          res(1);
        }, 10);
      });
      if (element.scrollTop > top) {
        element.scrollTop = top;
      }
    }
  }
};

export const switchRouter = (target: Router) => {
  if (target === Router.header || target === Router.home) {
    scrollTo(0);
  } else {
    const element = document.getElementById(target);
    if (element) {
      scrollTo(element.offsetTop - 30 - (checkIsWindowMobile() ? 50 : 0));
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
