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

const scrollTo = async (top: number, id: string) => {
  const element = document.getElementsByClassName("main")[0];
  if (element.scrollTop > top) {
    // scroll to top
    while (element.scrollTop > top) {
      // console.log(element.scrollTop, top, "1", scrollQueue);
      await new Promise((res) => {
        setTimeout(() => {
          element.scrollTop -= Math.max(
            Math.pow(element.scrollTop - top, 0.6),
            5
          );
          res(1);
        }, 10);
      });
      if (Math.abs(element.scrollTop - top) < 1) break;
      if (scrollQueue.length !== 1) {
        if (scrollQueue.indexOf(id) !== scrollQueue.length - 1) {
          return;
        }
      }
    }
    scrollQueue = [];
    element.scrollTop = top;
  } else {
    // scroll to down
    while (element.scrollTop < top) {
      // console.log(element.scrollTop, top, "2", scrollQueue);
      await new Promise((res) => {
        setTimeout(() => {
          element.scrollTop += Math.max(
            Math.pow(top - element.scrollTop, 0.6),
            5
          );
          res(1);
        }, 10);
      });
      if (Math.abs(element.scrollTop - top) < 1) break;
      if (scrollQueue.length !== 1) {
        if (scrollQueue.indexOf(id) !== scrollQueue.length - 1) {
          return;
        }
      }
    }
    scrollQueue = [];
    element.scrollTop = top;
  }
};

export const switchRouter = async (target: Router) => {
  const id = Math.random().toString();
  scrollQueue.push(id);
  if (target === Router.header || target === Router.home) {
    await scrollTo(0, id);
  } else {
    const element = document.getElementById(target);
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
