import React from "react";
import useQuestions from "../hooks/useQuestions";
import { BiLoader } from "react-icons/bi";

const MainPage = () => {
  const { data, isLoading, error } = useQuestions();

  if (error) return <p>Error loading questions. Please try again later.</p>;

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <BiLoader className="animate-spin text-orange-500" size={32} />
      </div>
    );

  return (
    <div>
      {data?.items.map((question) => (
        <div key={question.question_id}>{question.title}</div>
      ))}
    </div>
  );
};

export default MainPage;
