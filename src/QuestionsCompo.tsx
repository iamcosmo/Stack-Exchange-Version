import { useEffect} from 'react';
import useQuestions from './hooks/useQuestions'
import QuestionCard from './components/QuestionCard';
import { useFilterContext } from './context/FilterContext';


const QuestionsCompo = () => {


  const { setResults,results, selectedFilter,setSelectedFilter } = useFilterContext(); 

  const { data, isLoading, isError } = useQuestions(selectedFilter);

  useEffect(() => {
    if (data) {
      setResults(data);
    } else {
      setResults([]);
    }
  }, [data, setResults]);

  if (isError) return (<p>Error Loading the results</p>);

  if (isLoading) return (<p>Loading...</p>);



  return (
		<section className="flex-1 p-6">
			<div className="mb-5">
				<h4 className="text-3xl text-gray-600 font-semibold">Top Questions</h4>
			</div>
			<div className="flex justify-between items-center mb-6">
				<div className="flex space-x-1 md:space-x-1">
					{["hot","week","month","activity","votes",].map((filter) => (
						<button
							key={filter}
							className={`px-3 py-1 rounded-3xl font-medium ${
								selectedFilter === filter
									? "bg-orange-500 text-white"
									: "text-gray-400"
							}`}
							onClick={() => setSelectedFilter(filter)}>
							{filter.charAt(0).toUpperCase() + filter.slice(1)}
						</button>
					))}
				</div>
				<button className="bg-blue-500 px-4 md:px-8 py-1 text-sm rounded-3xl text-white font-medium">
					ASK QUESTION
				</button>
			</div>
			<div className="space-y-6">
				{isLoading ? (
					<div>Loading...</div>
				) : isError ? (
					<div>{isError}</div>
				) : (
					results?.map((question) => (
						<QuestionCard
							key={question.question_id}
							question={question.title}
							tags={question.tags}
							votes={question.score}
							answers={question.answer_count}
							views={question.view_count}
							time={new Date(
								question.creation_date * 1000
							).toLocaleDateString()}
							user={question.owner.display_name}
						/>
					))
				)}
			</div>
		</section>
	);
}

export default QuestionsCompo