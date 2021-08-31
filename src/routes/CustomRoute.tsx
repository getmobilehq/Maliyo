import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { Layout } from "../components";

const CustomRoute: FC<RouteProps> = ({ component, path, ...rest }: any) => (
  <Layout>
    <Route component={component} path={path} {...rest} />
  </Layout>
);

export default CustomRoute;
