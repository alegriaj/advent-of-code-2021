function countPaths2(pathMap) {
  const router = new Router(pathMap);
  return router.countPaths();
}

class Router {
  constructor(pathMap) {
    this.routeMap = {};
    for (let i = 0; i < pathMap.length; i++) {
      const [from, to] = pathMap[i].split('-');
      this.routeMap[from] = this.routeMap[from] || [];
      this.routeMap[to] = this.routeMap[to] || [];

      if (to != 'start' && from !== 'end') {
        this.routeMap[from].push(to);
      }

      if (from != 'start' && to !== 'end') {
        this.routeMap[to].push(from);
      }
    }
  }

  canEnter(path) {
    const lowerMap = {};
    let count2s = 0;
    for (let step of path) {
      if (isUpperCase(step) || step === 'start') {
        continue;
      }

      lowerMap[step] = lowerMap[step] || 0;
      lowerMap[step] += 1;

      if (lowerMap[step] > 2) {
        return false;
      }
      if (lowerMap[step] === 2) {
        count2s++;
      }
      if (count2s === 2) {
        return false;
      }
    }

    return true;
  }

  countPaths(origin = 'start', path = []) {
    if (origin === 'end') {
      return 1;
    }

    // purposely make a copy of the path
    path = [...path, origin];

    if (!this.canEnter(path)) {
      return 0;
    }

    let pathsCount = 0;
    for (let destination of this.routeMap[origin]) {
      pathsCount += this.countPaths(destination, path);
    }
    return pathsCount;
  }
}

function isLowerCase(str) {
  return str.toLowerCase() === str;
}

function isUpperCase(str) {
  return str.toUpperCase() === str;
}

module.exports = { countPaths2 };
