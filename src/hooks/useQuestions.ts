import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Question } from "../entities/Question";

const apiClient = new APIClient<Question>("/questions");

const useQuestions = (sort: string) =>
  useQuery({
    queryKey: ["questions", sort],
    queryFn: () => apiClient.getAllQuestions({ params: { sort,pageSize:10 } }),
    staleTime: ms("2h"),
    retry: 3, 
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: ms("1h"),
    refetchIntervalInBackground: true,
  });

export default useQuestions;
