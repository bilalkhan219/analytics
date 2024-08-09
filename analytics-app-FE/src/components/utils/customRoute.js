import usePageTimer from "./usePageTimer.js";

export const CustomRoute = ({ children,pageName }) => {
  usePageTimer(pageName);
  return children;
};
