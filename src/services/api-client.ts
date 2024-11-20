import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string|null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.stackexchange.com/2.3",
  params: {
    site: "stackoverflow",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllQuestions = async (config: AxiosRequestConfig)=> {
    const res = await axiosInstance
          .get<FetchResponse<T>>(this.endpoint, config);
      return res.data;
  }

}

export default APIClient;