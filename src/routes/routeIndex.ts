import { Application, Router } from "express";
import { authRoute } from "./authRoute";

const _routes: Array<[string, Router]> = [["/product", authRoute]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
