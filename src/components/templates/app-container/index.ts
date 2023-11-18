import { Utils } from "react-minimist-utils";

export const AppContainer = Utils.lazyLoad(
  () => import("./AppContainer"),
  (module) => module.AppContainer
);
