import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

const MainLayout: FC = () => {
  return (
    <>
      <div>头部</div>
      <div>
        <Outlet />
      </div>
      <div>尾部</div>
    </>
  );
};

export default MainLayout;
