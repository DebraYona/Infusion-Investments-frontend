import axios, { AxiosError, AxiosInstance } from 'axios';
import { DataResponse, ErrorResponse } from '../interfaces';

export class RestAPI {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    });
  }

  async get<R, E extends ErrorResponse = ErrorResponse>(uri: string): Promise<DataResponse<R>> {
    try {
      const response = await this.api.get<DataResponse<R>>(uri);
      return response.data;
    } catch (error) {
      console.error({ error });
      if (error && error.response) {
        const axiosError = error as AxiosError<E>;
        throw new Error(axiosError.response?.data.message || axiosError.message);
      }
      throw error;
    }
  }

  async post<R, E extends ErrorResponse = ErrorResponse>(
    uri: string,
    body: unknown,
  ): Promise<DataResponse<R>> {
    try {
      const response = await this.api.post<DataResponse<R>>(uri, body);
      return response.data;
    } catch (error) {
      console.error({ error });
      if (error && error.response) {
        const axiosError = error as AxiosError<E>;
        throw new Error(axiosError.response?.data.message || axiosError.message);
      }
      throw error;
    }
  }

  async update<R, E extends ErrorResponse = ErrorResponse>(
    uri: string,
    body: unknown,
  ): Promise<DataResponse<R>> {
    try {
      const response = await this.api.put<DataResponse<R>>(uri, body);
      return response.data;
    } catch (error) {
      console.error({ error });
      if (error && error.response) {
        const axiosError = error as AxiosError<E>;
        throw new Error(axiosError.response?.data.message || axiosError.message);
      }
      throw error;
    }
  }

  async delete<R, E extends ErrorResponse = ErrorResponse>(uri: string): Promise<DataResponse<R>> {
    try {
      const response = await this.api.delete<DataResponse<R>>(uri);
      return response.data;
    } catch (error) {
      console.error({ error });
      if (error && error.response) {
        const axiosError = error as AxiosError<E>;
        throw new Error(axiosError.response?.data.message || axiosError.message);
      }
      throw error;
    }
  }
}
