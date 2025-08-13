import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CoachHttpService } from '@core/http/coach-http/coach-http.service';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { Coach } from '@core/models/coach.model';
import { School } from '@core/models/school.model';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';
import { MessageErrorInputComponent } from '@shared/components/message-error-input/message-error-input.component';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';

@Component({
  selector: 'app-create-coach',
  imports: [CustomInputComponent, CustomSelectComponent, ReactiveFormsModule, MessageErrorInputComponent, ToastComponent],
  templateUrl: './create-coach.component.html',
  styleUrl: './create-coach.component.css',
  providers: [
    ToastService
  ]
})
export class CreateCoachComponent implements OnInit {

  private schoolHttp = inject(SchoolHttpService);
  private coachHttp = inject(CoachHttpService);
  private toast = inject(ToastService);


  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    id_school: new FormControl(null, [Validators.required]),
  });

  schools: School[] = [];


  ngOnInit(): void {
    this.schoolHttp.getAll().subscribe(res => this.schools = res.data);
  }

  getError(controlName: string, error: string) {
    return this.form.get(controlName)?.hasError(error) && this.form.get(controlName)?.touched;
  }

  onSubmit() {

    if (this.form.valid) {
      this.coachHttp.create(this.form.value as Coach).subscribe({
        next: (res) => {
          this.toast.open({ paragraph: 'Entrenador creado', status: ToastStatus.SUCCESS, title: 'Éxito', deration: 3000 });
        }
      });
    } else {
      this.form.markAllAsTouched();
    }

  };

}

