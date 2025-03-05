export interface Pagination<T> {
  data: T;
  total: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  next: string | null;
  prev?: string | null;
  messageError?: string;
}
