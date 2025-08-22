import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { ControlFormSubmit } from '@core/interfaces/control-form-submit.interface';
import { BoxerRelatedDataService } from '@core/services/boxer-related-data/boxer-related-data.service';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';
import { MessageErrorInputComponent } from '@shared/components/message-error-input/message-error-input.component';
import { ToastComponent } from '@shared/components/toast';
import { negativeNumberValidator } from '@shared/utils/negativeNumberVlidator/negative-number-validator.util';

@Component({
  selector: 'app-edit-boxer',
  imports: [CustomInputComponent, CustomSelectComponent, ToastComponent, MessageErrorInputComponent, ReactiveFormsModule],
  templateUrl: './edit-boxer.component.html',
  styleUrl: './edit-boxer.component.css'
})
export class EditBoxerComponent implements ControlFormSubmit, OnInit, OnDestroy {

  private boxerData = inject(BoxerRelatedDataService);
  private boxerHttp = inject(BoxerHttpService);
  private activeRote = inject(ActivatedRoute);

  gender = [
    {
      name: 'Masculino'
    },
    {
      name: 'Femenino'
    }
  ];

  paramsUuid = this.activeRote.snapshot.params['id'];

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id_school: new FormControl(0, [Validators.required]),
    age: new FormControl(0, [Validators.required, negativeNumberValidator]),
    id_category: new FormControl(0, [Validators.required]),
    weight: new FormControl(0, [Validators.required, negativeNumberValidator]),
    id_coach: new FormControl(0, [Validators.required]),
    details: new FormControl(''),
    id_state: new FormControl(0, [Validators.required]),
    fights: new FormControl(0, [Validators.required, negativeNumberValidator]),
    gender: new FormControl(null, [Validators.required]),
  });


  ngOnInit(): void {


    this.boxerHttp.getFindOne(this.paramsUuid)
      .subscribe({
        next: (res) => {

          const entries = Object.entries(res.data);

          entries.forEach(([key, value]) => {
            if (this.form.get(key)) {
              this.form.get(key)?.setValue(value);
            }

          });

        }
      })

    this.boxerData.getData();


  }


  get data() {
    return this.boxerData.data;
  }

  getError(name: string, error: string) {
    return this.form.get(name)?.hasError(error) && this.form.get(name)?.touched;
  }

  onSubmit(): void {
    throw new Error('Method not implemented.');
  }


  ngOnDestroy(): void {
    this.boxerData.onDestroy();
  }

}
