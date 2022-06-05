interface RoutesType {
  [x: string]: {
    baseRoutes: {
      main: string;
      [x: string]: string;
    };
    details: {
      [x: string]: string;
    };
  };
}

export const AppRoutes: RoutesType = {
  users: {
    baseRoutes: {
      main: "/users",
    },
    details: {
      login: ":login",
    },
  },
};
