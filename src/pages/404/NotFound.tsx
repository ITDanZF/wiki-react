import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Result, Button } from "antd";
import {RouterPath} from "@/common/Router.constance.ts";

const NotFound: FC = () => {
  const nav = useNavigate();
  return <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Button type="primary" onClick={() => nav(RouterPath.LIST)}>Back Home</Button>} >

  </Result>
};

export default NotFound;
