import { FC } from "react";
import styles from "./QuestionLayout.module.scss";
import { Outlet } from "react-router-dom";

const QuestionLayout: FC = () => {
  return (
    <div>
      QuestionLayout
      <Outlet />
    </div>
  );
};

export default QuestionLayout;
