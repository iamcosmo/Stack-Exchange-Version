import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Question } from "../entities/Question";


const validSortOptions = ["activity", "creation", "votes", "relevance"];

const useSimilarQuestions = (title: string,sortFilter:string) => {
    const apiClient = new APIClient<Question>("/similar");

    const queryParams = {
      title, 
      sort: validSortOptions.includes(sortFilter) ? sortFilter : undefined,
    };

    return useQuery({
      queryKey: ["similarQuestions", title,sortFilter],
      queryFn: () => apiClient.searchQuestions(queryParams.title,queryParams.sort||""),
      enabled: !!title, 
      staleTime: 0,
      refetchOnWindowFocus: false,
    });
  };
  

export default useSimilarQuestions;
