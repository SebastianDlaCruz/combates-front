import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CoachHttpService } from '@core/http/coach-http/coach-http.service';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { Coach } from '@core/models/coach.model';
import { School } from '@core/models/school.model';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';
import { MessageErrorInputComponent } from '@shared/components/message-error-input/message-error-input.component';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-edit-coach',
  imports: [CustomInputComponent, CustomSelectComponent, ToastComponent, MessageErrorInputComponent, ReactiveFormsModule],
  templateUrl: './edit-coach.component.html',
  styleUrl: './edit-coach.component.css',
  providers: [ToastService]
})
export class EditCoachComponent implements OnInit {

  private schoolHttp = inject(SchoolHttpService);
  private coachHttp = inject(CoachHttpService);
  private toast = inject(ToastService);
  private activateRote = inject(ActivatedRoute);
  private id = this.activateRote.snapshot.params['id'];


  schools: School[] = [];
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]),
    id_school: new FormControl(null, [Validators.required]),
  });


  ngOnInit(): void {

    forkJoin({
      schools: this.schoolHttp.getAll(),
      coaches: this.coachHttp.getFindOne(this.id)
    }).subscribe(({ schools, coaches }) => {
      this.schools = schools.data;
      this.setData(coaches.data);
    });

  }


  setData(data: Coach) {
    const value = Object.entries(data);

    value.forEach(([key, value]) => {
      console.log(key, value)
      this.form.get(key)?.setValue(value);
    })
  }

  getError(controlName: string, error: string) {
    return this.form.get(controlName)?.hasError(error) && this.form.get(controlName)?.touched;
  }

  onSubmit() {

    if (this.form.valid) {
      this.coachHttp.update(this.id, this.form.value as Coach).subscribe({
        next: (res) => {
          this.toast.open({ paragraph: 'Entrenador creado', status: ToastStatus.SUCCESS, title: 'Éxito', deration: 3000 });
        }
      });
    } else {
      this.form.markAllAsTouched();
    }

  };
}
