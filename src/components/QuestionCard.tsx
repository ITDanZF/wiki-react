import { FC } from "react";
import styles from "./QuestionCard.module.scss";
import {Button, Divider, Popconfirm, Space, Tag, Modal } from "antd";
import {Link, useNavigate} from "react-router-dom";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  LineChartOutlined,
  StarOutlined
} from "@ant-design/icons";
import {RouterPath} from "@/common/Router.constance.ts";

const { confirm } = Modal;

type QuestionCardProps = {
  id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createAt: string;
};

const QuestionCard: FC<QuestionCardProps> = (props: QuestionCardProps) => {

  function duplicateQuestion() {
    const res = confirm("确定复制问卷吗？");
    // if (res)
  }

  function del() {
    confirm({
        title: "确定删除问卷吗？",
        icon: <ExclamationCircleFilled />,
        content: "删除后问卷将移入回收站",
        okText: "确定",
        cancelText: "取消",
        onOk() {
            alert("删除");
        },
    })
  }
  const nav = useNavigate();
  const { id, title, isPublished, isStar, answerCount, createAt } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={isPublished? `/question/statistics/${id}`: `/question/edit/${id}`}>
            <Space>
              {isStar && <StarOutlined style={{ color: "red" }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
                <Tag color="processing">已发布</Tag>
            ) : (
                <Tag>未发布</Tag>
            )}
            <span>答卷：{answerCount}</span>
            <span>{createAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: "12px"}} />
      <div className={styles["button-container"]}>
        <div className={styles.left}>
          <Space>
            <Button onClick={() => nav(RouterPath.EDIT)} icon={<EditOutlined />} type="text" size="small">编辑问卷</Button>
            <Button onClick={() => nav(RouterPath.STATISTICS)} icon={<LineChartOutlined />} type="text" size="small" disabled={!isPublished}>编辑统计</Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="text" icon={<StarOutlined />} size="small">
              { isStar ? "取消星标" : "星标" }
            </Button>
            <Popconfirm title="确定复制问卷吗？" onConfirm={duplicateQuestion} okText="确定" cancelText="取消">
              <Button type="text" icon={<CopyOutlined />} size="small">复制</Button>
            </Popconfirm>
            <Button type="text" icon={<DeleteOutlined />} size="small" onClick={del}>删除</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
