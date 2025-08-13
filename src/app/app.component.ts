import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageErrorService } from '@core/services/message-error/message-error.service';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ToastService]
})
export class AppComponent implements OnInit {

  private messageError$ = inject(MessageErrorService);
  private toastService = inject(ToastService);

  ngOnInit(): void {

    this.messageError$.getMessageError().subscribe(message => {

      if (message) {
        this.toastService.open({
          paragraph: message,
          status: ToastStatus.ERROR,
          title: 'Error',
          deration: 5000

        });
      }


    });

  }

}
