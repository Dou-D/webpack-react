import React from "react";
import { Link, Outlet } from "react-router-dom";

const BasicLayout: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      {/* 顶部导航栏 */}
      <nav>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
      </nav>

      {/* ★ Outlet 相当于 Vue 中的 <router-view>，子路由的内容会渲染在这里 */}
      <React.Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default BasicLayout;
