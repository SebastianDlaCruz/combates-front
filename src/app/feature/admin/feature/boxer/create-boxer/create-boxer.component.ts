import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { Boxer } from '@core/models/boxer.model';
import { Category } from '@core/models/category.model';
import { Coach } from '@core/models/coach.model';
import { School } from '@core/models/school.model';
import { StateBoxer } from '@core/models/state-boxer.model';
import { BoxerRelatedDataService } from '@core/services/boxer-related-data/boxer-related-data.service';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';
import { MessageErrorInputComponent } from '@shared/components/message-error-input/message-error-input.component';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';
import { negativeNumberValidator } from '@shared/utils/negativeNumberVlidator/negative-number-validator.util';

@Component({
  selector: 'app-create-boxer',
  imports: [CustomInputComponent, CustomSelectComponent, ReactiveFormsModule, ToastComponent, MessageErrorInputComponent],
  templateUrl: './create-boxer.component.html',
  styleUrl: './create-boxer.component.css',
  providers: [ToastService]
})
export class CreateBoxerComponent implements OnInit {


  private boxerHttp = inject(BoxerHttpService);
  private boxerData = inject(BoxerRelatedDataService);
  private toast = inject(ToastService);

  schools: School[] = [];
  categories: Category[] = [];
  couches: Coach[] = [];
  stateBoxer: StateBoxer[] = [];

  gender = [
    {
      name: 'Masculino'
    }, {
      name: 'Femenino'
    }
  ]
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
    gender: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {

    this.boxerData.getData().subscribe({
      next: (res) => {
        this.schools = res.schools;
        this.categories = res.categories;
        this.couches = res.couches;
        this.stateBoxer = res.stateBoxer
      }
    })
  }


  getError(name: string, error: string) {
    console.log(this.form.get(name)?.errors)
    return this.form.get(name)?.hasError(error) && this.form.get(name)?.touched;
  }

  onSubmit() {

    if (this.form.valid) {

      const parseForm = {
        ...this.form.value,
        age: parseInt(this.form.get('age')?.value?.toString() as string),
        weight: parseFloat(this.form.get('weight')?.value?.toString() as string),
        fights: parseInt(this.form.get('fights')?.value?.toString() as string),
      }
      console.log(parseForm);
      this.boxerHttp.create(parseForm as Boxer).subscribe(
        {
          next: (value) => {
            this.toast.open({
              title: 'Éxito',
              paragraph: 'Boxeador creado con éxito',
              status: ToastStatus.SUCCESS
            })
          }
        }
      );
    }
  }

}
