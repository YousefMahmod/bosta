import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://tracking.bosta.co/",
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getTrack(id: number | string) {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  }
}

export default ApiClient;
