import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Question } from "../entities/Question";

const apiClient = new APIClient<Question>("/questions");

const useQuestions = () =>
  useQuery({
    queryKey: ["questions"],
    queryFn: apiClient.getAllQuestions,
    staleTime: ms("2h"),
    refetchOnWindowFocus: false, 
    refetchOnMount: false,
    refetchInterval: ms("1h"), 
    refetchIntervalInBackground: true,
  });

export default useQuestions;