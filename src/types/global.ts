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
