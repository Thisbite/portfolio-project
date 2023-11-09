import { useState, useEffect } from "react";

import { quizObj } from "../mockData";


const useQuiz = () => {
  const [quiz, setQuiz] = useState({});
  const [loading, setLoading] = useState(true);

  const loadQuiz =  () => {
    setQuiz(quizObj);
    setLoading(false);
  };

  useEffect(() => {
    loadQuiz();
  }, []);

  return [quiz, loading];
};

export { useQuiz };