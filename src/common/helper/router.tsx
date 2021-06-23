export enum Router {
  home = "home",
  origin = "origin",
  introduction = "introduction",
  cooperation = "cooperation",
}

export const switchRouter = (target: Router) => {
  const main = document.getElementsByClassName("main")[0];
  const element = document.getElementById(target);
  if (element) {
    if (element) {
      main.scrollTo({ behavior: "smooth", top: element.offsetTop });
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
      if (currentYOffset < offsetTop) {
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
