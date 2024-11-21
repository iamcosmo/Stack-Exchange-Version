import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string|null;
  items: T[];
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

          console.log("Fetched Data:", res.data);
      return res.data.items;
  }

  searchQuestions = async (title: string,sortFilter:string, config?: AxiosRequestConfig) => {
    const res = await axiosInstance.get<FetchResponse<T>>(this.endpoint, {
      ...config,
      params: {
        ...config?.params,
        title,
        sort: sortFilter,
        order: "desc",
      },
    });
    console.log("Search Results:", res.data);
    return res.data.items;
  };

}

export default APIClient;