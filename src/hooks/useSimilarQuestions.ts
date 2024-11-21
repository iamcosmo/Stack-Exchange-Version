import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Question } from "../entities/Question";


const useSimilarQuestions = (title: string,sortFilter:string) => {
    const apiClient = new APIClient<Question>("/similar");
  
    return useQuery({
      queryKey: ["similarQuestions", title],
      queryFn: () => apiClient.searchQuestions(title,sortFilter),
      enabled: !!title, 
      staleTime: 0,
      refetchOnWindowFocus: false,
    });
  };
  

export default useSimilarQuestions;
