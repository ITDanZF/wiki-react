import { FC, useState } from 'react'
import QuestionCard from '@/components/QuestionCard.tsx'
const List: FC = () => {
  const [questions, setQuestions] = useState([
    {
      id: 'q1',
      title: 'What is your name?',
      isPublished: true,
      isStar: false,
      answerCount: 0,
      createAt: '2023-10-01',
    },
    {
      id: 'q2',
      title: 'What is your age?',
      isPublished: false,
      isStar: false,
      answerCount: 0,
      createAt: '2023-10-01',
    },
    {
      id: 'q3',
      title: 'What is your favorite color?',
      isPublished: false,
      isStar: false,
      answerCount: 0,
      createAt: '2023-10-01',
    },
  ]);

  return (
    <div>
      <QuestionCard />
    </div>
  )
}

export default List
