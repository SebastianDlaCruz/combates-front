import { Pagination } from "./pagination.model";

export interface ResponseRequest<T> {
  statusCode: number;
  success: boolean;
  data?: T;
  message: string;
  error?: any;
  pagination?: Pagination<T>;
}
