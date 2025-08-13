import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAlertCircle, featherCheckCircle, featherXCircle } from '@ng-icons/feather-icons';
import { ToastStatus } from './enum/enum.toast';
import { ToastService } from './service/toast/toast.service';

@Component({
  selector: 'app-toast',
  imports: [AsyncPipe, NgIcon],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  providers: [
    provideIcons({ featherCheckCircle, featherAlertCircle, featherXCircle })],

})
export class ToastComponent {


  status = ToastStatus;

  checkIcon = featherCheckCircle;
  warningIcon = featherAlertCircle;
  xIcon = featherXCircle;

  constructor(private readonly toastService: ToastService) { }


  get visible$() {
    return this.toastService.getVisible$();
  }

  get data$() {
    return this.toastService.getData$()
  }

}
