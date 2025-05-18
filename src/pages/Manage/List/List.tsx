import { FC, useState } from "react";
import  { Typography } from "antd";
import styles from "./List.module.scss";
import { useSearchParams } from "react-router-dom";
import QuestionCard from "@/components/QuestionCard.tsx";

const { Title } = Typography;

const List: FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("keyword");
  console.log(search);
  const [questions, setQuestions] = useState([
    {
      id: "q1",
      title: "What is your name?",
      isPublished: true,
      isStar: false,
      answerCount: 0,
      createAt: "2023-10-01",
    },
    {
      id: "q2",
      title: "What is your age?",
      isPublished: false,
      isStar: false,
      answerCount: 0,
      createAt: "2023-10-01",
    },
    {
      id: "q3",
      title: "What is your favorite color?",
      isPublished: false,
      isStar: false,
      answerCount: 0,
      createAt: "2023-10-01",
    },
  ]);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questions.length> 0 && questions.map((question) => {
          const { id } = question;
          return <QuestionCard key={id} {...question} />;
        })}
      </div>

      <div className={styles.footer}>
        loadmore 上划加载更多...
      </div>
    </>
  );
};

export default List;
