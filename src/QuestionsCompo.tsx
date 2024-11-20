import useQuestions from './hooks/useQuestions'


const QuestionsCompo = () => {

  const { data, isLoading, isError } = useQuestions()

  if (isError) return (<p>Error Loading the results</p>);

  if (isLoading) return (<p>Loading...</p>);


  return (
     <div>
      <h2>Questions</h2>
      <ul>
        {data?.map((question) => (
          <li key={question.question_id}>
            <a
              href={question.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {question.title}
            </a>
            <p className="text-sm text-gray-600">
              By {question.owner.display_name} | Views: {question.view_count}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsCompo