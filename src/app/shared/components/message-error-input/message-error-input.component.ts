import { Component, input } from '@angular/core';

@Component({
  selector: 'app-message-error-input',
  imports: [],
  templateUrl: './message-error-input.component.html',
  styleUrl: './message-error-input.component.css'
})
export class MessageErrorInputComponent {

  message = input.required<string>();
}
