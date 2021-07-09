import { checkIsWindowMobile } from "../../page/Layout/Layout";

export enum Router {
  header = "header",
  home = "home",
  origin = "origin",
  introduction = "introduction",
  cooperation = "cooperation",
}

let scrollQueue: string[] = [];

export const isScrolling = () => {
  return scrollQueue.length !== 0;
};

const scrollTo = async (target: number, id: string) => {
  const element = document.getElementsByClassName("main")[0];
  if (element.scrollTop > target) {
    // scroll to target
    while (element.scrollTop > target) {
      // console.log(element.scrollTop, element.scrollHeight, target, window.innerHeight);
      await new Promise((res) => {
        setTimeout(() => {
          element.scrollTop -= Math.max(
            Math.pow(element.scrollTop - target, 0.6),
            10
          );
          res(1);
        }, 10);
      });
      if (Math.abs(element.scrollTop - target) < 1) break;
      if (scrollQueue.length !== 1) {
        if (scrollQueue.indexOf(id) !== scrollQueue.length - 1) {
          return;
        }
      }
    }
    scrollQueue = [];
    element.scrollTop = target;
  } else {
    // scroll to down
    while (element.scrollTop < target) {
      // console.log(element.scrollTop, element.scrollHeight, target, window.innerHeight);
      await new Promise((res) => {
        setTimeout(() => {
          element.scrollTop += Math.max(
            Math.pow(target - element.scrollTop, 0.6),
            10
          );
          res(1);
        }, 10);
      });
      if (Math.abs(element.scrollTop - target) < 1) break;
      if (element.scrollTop + window.innerHeight >= element.scrollHeight) {
        break;
      }
      if (scrollQueue.length !== 1) {
        if (scrollQueue.indexOf(id) !== scrollQueue.length - 1) {
          return;
        }
      }
    }
    scrollQueue = [];
    element.scrollTop = target;
  }
};

export const switchRouter = async (router: Router) => {
  const id = Math.random().toString();
  scrollQueue.push(id);
  if (router === Router.header || router === Router.home) {
    await scrollTo(0, id);
  } else {
    const element = document.getElementById(router) as HTMLElement;
    if (element) {
      await scrollTo(
        element.offsetTop - 40 - (checkIsWindowMobile() ? 50 : 0),
        id
      );
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
