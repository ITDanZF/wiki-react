import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Logo from "@/components/Logo.tsx";
const { Header, Footer, Content } = Layout;
import styles from "./MainLayout.module.scss";
import UserInfo from "@/components/UserInfo.tsx";

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
          <div className={styles.left}>
              <Logo />
          </div>
          <div className={styles.right}>
              <UserInfo />
          </div>
      </Header>
        <Layout>
            <Content className={styles.main}>
                <Outlet />
            </Content>
        </Layout>
      <Footer className={styles.footer}>
          小玉问卷 © 2025 | 由小玉团队出品 | 联系方式：contact@xiaoyu.com
      </Footer>
    </Layout>
  );
};

export default MainLayout;
