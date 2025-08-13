import { ToastStatus } from "../enum/enum.toast";

export interface Toast {
  title: string;
  status: ToastStatus;
  paragraph: string;
  deration?: number;
}
