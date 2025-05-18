import { FC } from 'react';
import { Link } from "react-router-dom";
import { RouterPath} from "@/common/Router.constance.ts";

const UserInfo: FC = () => {
    return <>
        <Link to={RouterPath.LOGIN}>登录</Link>
    </>
}

export default UserInfo;