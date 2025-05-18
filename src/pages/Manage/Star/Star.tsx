import {FC, useState} from "react";
import styles from "./Star.module.scss";
import {Empty, Typography} from "antd";
import QuestionCard from "@/components/QuestionCard.tsx";
const { Title } = Typography;
const Star: FC = () => {
  const [questions, setQuestions] = useState([
    {
      id: "q1",
      title: "What is your name?",
      isPublished: true,
      isStar: true,
      answerCount: 0,
      createAt: "2023-10-01",
    },
    {
      id: "q2",
      title: "What is your age?",
      isPublished: false,
      isStar: true,
      answerCount: 0,
      createAt: "2023-10-01",
    },
    {
      id: "q3",
      title: "What is your favorite color?",
      isPublished: false,
      isStar: true,
      answerCount: 0,
      createAt: "2023-10-01",
    },
  ]);
  return <>
    <div className={styles.header}>
      <div className={styles.left}>
        <Title level={3}>我的星标问卷</Title>
      </div>
      <div className={styles.right}>(搜索)</div>
    </div>
    <div className={styles.content}>
      { questions.length === 0 && <Empty description="暂无数据" /> }
      {questions.length> 0 && questions.map((question) => {
        const { id } = question;
        return <QuestionCard key={id} {...question} />;
      })}
    </div>
    <div className={styles.footer}>分页</div>
  </>;
};
export default Star;
