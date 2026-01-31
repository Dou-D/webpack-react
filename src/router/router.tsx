import { lazy } from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
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

// 3. 创建路由实例
// 这里使用 HashRouter 是为了配合你之前的 "auto" 路径配置，确保任意部署环境都能跑
export const router = createBrowserRouter(routes);
