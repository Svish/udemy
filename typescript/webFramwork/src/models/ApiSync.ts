import axios, { AxiosResponse, AxiosInstance } from 'axios';

export default class ApiSync<T> {
  private readonly axios: AxiosInstance;

  constructor(baseUrl: string, private readonly key: keyof T) {
    this.axios = axios.create({
      baseURL: baseUrl,
    });
  }

  public async fetch(key: number): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(`/${key}`);
  }

  public async save(data: T): Promise<AxiosResponse<T>> {
    return data[this.key]
      ? this.axios.put<T>(`/${data[this.key]}`, data)
      : this.axios.post<T>(`/`, data);
  }
}
