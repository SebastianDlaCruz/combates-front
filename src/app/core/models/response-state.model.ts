export interface ResponseStateData<T> {
  success: boolean;
  message: string;
  data: T;
}


export interface ResponseState {
  success: boolean;
  message: string;
}
