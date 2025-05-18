import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {Button, Typography} from "antd";
import {RouterPath} from "@/common/Router.constance.ts";
import styles from "./Home.module.scss"
const { Title, Paragraph } = Typography;
const Home: FC = () => {
  const nav = useNavigate();

  // const clickHandle = () => {
  //   console.log("登录按钮被点击");
  //
  //   nav({
  //     pathname: "/login",
  //     search: "a=1234",
  //   });
  // };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 ｜ 在线投票</Title>
        <Paragraph>已累计创建问卷 100 份， 发布问卷90份，收到答卷980份</Paragraph>
      </div>
      <div>
        <Button type="primary" onClick={() => nav(RouterPath.LIST)}> 开始使用</Button>
      </div>
    </div>
  );
};

export default Home;
