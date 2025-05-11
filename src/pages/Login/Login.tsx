import { FC } from "react";
import { useNavigate } from "react-router-dom";
const Login: FC = () => {
  const nav = useNavigate();
  const clickHandle = () => {
    console.log("登录按钮被点击");
    nav(-1);
  };
  return (
    <div>
      <p>登录</p>
      <button onClick={clickHandle}>返回上一页</button>
    </div>
  );
};

export default Login;
