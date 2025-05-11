import { FC, useState } from "react";
import styles from "./List.module.scss";
import QuestionCard from "@/components/QuestionCard.tsx";
const List: FC = () => {
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
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questions.map((question) => {
          const { id } = question;
          return <QuestionCard key={id} {...question} />;
        })}
      </div>

      <div className={styles.footer}>footer</div>
    </>
  );
};

export default List;
