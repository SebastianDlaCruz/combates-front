import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { CountdownService } from '../../../fighting-app/components/countdown/service/countdown.service';

@Component({
  selector: 'app-start-date',
  imports: [CustomInputComponent, ReactiveFormsModule],
  templateUrl: './start-date.component.html',
  styleUrl: './start-date.component.css',

})
export class StartDateComponent {

  private readonly countdownService = inject(CountdownService);


  form = new FormGroup({
    endDate: new FormControl('', [Validators.required])
  });



  onSubmit() {

    if (this.form.valid) {
      console.log(this.form.value.endDate as string);


    }

  }

}
