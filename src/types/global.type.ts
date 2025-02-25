import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TPagination = {
  total: number;
  page: number;
  limit: number;
  totalPage: number;
};

export interface TResponse<T> {
  success?: boolean;
  message?: string;
  data?: T;
  meta?: TPagination;
  error?: TError;
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParams = {
  field: string;
  value: string;
};
