function countPaths(pathMap) {
  const router = new Router(pathMap);
  return router.countPaths();
}

class Router {
  constructor(pathMap) {
    this.routeMap = {};
    for (let i = 0; i < pathMap.length; i++) {
      const [from, to] = pathMap[i].split('-');
      this.routeMap[from] = this.routeMap[from] || [];
      this.routeMap[from].push(to);
      this.routeMap[to] = this.routeMap[to] || [];
      this.routeMap[to].push(from);
    }
  }

  countPaths(from = 'start', path = []) {
    if (from === 'end') {
      return 1;
    }

    let pathsCount = 0;
    for (let to of this.routeMap[from]) {
      if (to.toLowerCase() === to && path.includes(to)) {
        continue;
      }
      //   console.log(from, to, path);
      pathsCount += this.countPaths(to, [...path, from]);
    }
    return pathsCount;
  }
}

module.exports = { countPaths };
