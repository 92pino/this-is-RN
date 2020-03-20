const router = {
  // router의 종류
  type: 'tab',

  // 네비게이터의 초기 상태
  getInitialState({ routeNames, routeParamList }) {
    const index =
      options.initialRouteName === undefined
        ? 0
        : routeNames.indexOf(options.initialRouteName);

    return {
      stale: false,
      type: 'tab',
      key: shortid(),
      index,
      routeNames,
      routes: routeNames.map(name => ({
        name,
        key: name,
        params: routeParamList[name],
      })),
    };
  },

  // 전체 탐색 상태를 재수화시키는 기능
  getRehydratedState(partialState, { routeNames, routeParamList }) {
    const state = partialState;

    if (state.stale === false) {
      return state as NavigationState;
    }

    const routes = state.routes
      .filter(route => routeNames.includes(route.name))
      .map(
        route =>
          ({
            ...route,
            key: route.key || `${route.name}-${shortid()}`,
            params:
              routeParamList[route.name] !== undefined
                ? {
                    ...routeParamList[route.name],
                    ...route.params,
                  }
                : route.params,
          } as Route<string>)
      );

    return {
      stale: false,
      type: 'tab',
      key: shortid(),
      index:
        typeof state.index === 'number' && state.index < routes.length
          ? state.index
          : 0,
      routeNames,
      routes,
    };
  },

  // 현재 상태와 업데이트 된 경로 이름 목록을 가져 와서 새로운 상태르 를 반환
  getStateForRouteNamesChange(state, { routeNames }) {
    const routes = state.routes.filter(route =>
      routeNames.includes(route.name)
    );

    return {
      ...state,
      routeNames,
      routes,
      index: Math.min(state.index, routes.length - 1),
    };
  },

  // 경로의 현재 상태와 키를 가져와 해당 경로에 초점을 맞춘 상태를 반환
  getStateForRouteFocus(state, key) {
    const index = state.routes.findIndex(r => r.key === key);

    if (index === -1 || index === state.index) {
      return state;
    }

    return { ...state, index };
  },

  getStateForAction(state, action) {
    switch (action.type) {
      case 'NAVIGATE': {
        const index = state.routes.findIndex(
          route => route.name === action.payload.name
        );

        if (index === -1) {
          return null;
        }

        return { ...state, index };
      }

      default:
        return BaseRouter.getStateForAction(state, action);
    }
  },

  shouldActionChangeFocus() {
    return false;
  },
};

const SimpleRouter = () => router;

export default SimpleRouter;
