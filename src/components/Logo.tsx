import { FC } from 'react';
import { Space, Typography } from "antd";
const { Title } = Typography;
import { Link } from "react-router-dom";
import { FormOutlined } from "@ant-design/icons";
import styles from "./Logo.module.scss"
const Logo: FC = () => {
    return <div className={styles.container}>
        <Link to="/">
            <Space>
                <Title>
                    <FormOutlined />
                </Title>
                <Title>
                    小玉问卷
                </Title>
            </Space>
        </Link>
    </div>
}

export default Logo;