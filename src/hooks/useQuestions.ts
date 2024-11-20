import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Question } from "../entities/Question";
import { AxiosRequestConfig } from "axios";
const apiClient = new APIClient<Question>("/questions");

const useQuestions = (params?: AxiosRequestConfig["params"]) =>
    useQuery({
      queryKey: ["questions", params],
      queryFn: () => apiClient.getAllQuestions({ params }),
      staleTime: ms("24h"),
    });
  

export default useQuestions;