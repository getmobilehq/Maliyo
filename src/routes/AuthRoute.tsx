import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps, useLocation, Redirect } from "react-router-dom";
import { AppState } from "../redux/AppState";

const AuthRoute: FC<RouteProps> = ({ component, path, ...rest }: any) => {
  const auth = useSelector((state: AppState) => state.auth);

  const location = useLocation();

  return auth.isAuthenticated ? (
    <Route component={component} path={path} {...rest} />
  ) : (
    <Redirect to={{ pathname: "/login", state: { next: location.pathname } }} />
  );
};

export default AuthRoute;
