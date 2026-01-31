import { lazy } from "react";
import {
  createBrowserRouter,
  createHashRouter,
  RouteObject,
} from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BasicLayout />, // 外层布局
    children: [
      {
        index: true, // 默认子路由 (对应 path: '/')
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  // 兜底路由，匹配所有路径
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
];

type Window = typeof globalThis & {
  GLOBAL_CONFIG: {
    BASENAME: string;
  };
};

const basename = (window as unknown as Window).GLOBAL_CONFIG?.BASENAME || "/";
// 3. 创建路由实例
export const router = createHashRouter(routes, {
  basename,
});
