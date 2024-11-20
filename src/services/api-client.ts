import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    items: T[]; // The API returns 'items' instead of 'results'
    has_more: boolean;
    quota_max: number;
    quota_remaining: number;
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

  get = async (id:string|number)=>{
    const res = await axiosInstance.get<T>(this.endpoint + `/${id}`);
    return res.data;  
  }
}

export default APIClient;