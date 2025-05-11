import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home: FC = () => {
  const nav = useNavigate();

  const clickHandle = () => {
    console.log("登录按钮被点击");
    // nav("/login");
    nav({
      pathname: "/login",
      search: "a=1234",
    });
  };

  return (
    <div>
      <p>首页</p>
      <div>
        <button onClick={clickHandle}>登录</button>
        <Link to="/register?a=10">注册</Link>
      </div>
    </div>
  );
};

export default Home;
