import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { School } from '@core/models/school.model';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { MessageErrorInputComponent } from '@shared/components/message-error-input/message-error-input.component';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';

@Component({
  selector: 'app-create-school',
  imports: [CustomInputComponent, ReactiveFormsModule, MessageErrorInputComponent, ToastComponent],
  templateUrl: './create-school.component.html',
  styleUrl: './create-school.component.css',
  providers: [ToastService]
})
export class CreateSchoolComponent {

  private schoolHttp = inject(SchoolHttpService);
  private toastService = inject(ToastService);
  isDisable = false;

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
  })

  getHasError(error: string) {
    return this.form.get('name')?.hasError(error);
  }

  onSubmit() {

    if (this.form.valid) {
      this.isDisable = true;
      this.schoolHttp.create(this.form.value as School).subscribe(
        {
          next: (res) => {

            this.toastService.open({ paragraph: 'Escuela creada', status: ToastStatus.SUCCESS, title: 'Éxito', deration: 3000 });
            this.isDisable = false;
          },
          error: (err) => {
            this.isDisable = false;
          }

        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }


}
