import React, { useContext } from 'react';
import { Route, Routes } from "react-router";
import { privateRoutes, publicRoutes } from "../router/router";
import { AuthContext } from "../context";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      {
        isAuth
          ? privateRoutes.map(route =>
              <Route key={route.path} path={route.path} element={route.element} />
          )
          : publicRoutes.map(route =>
            <Route key={route.path} path={route.path} element={route.element} />
          )
      }
    </Routes>
  );
};

export default AppRouter;