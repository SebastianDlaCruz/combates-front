import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { MenuVerticalComponent } from "@shared/components/menu-vertical/menu-vertical.component";
import { MessageErrorInputComponent } from '@shared/components/message-error-input/message-error-input.component';
import { ToastComponent, ToastService, ToastStatus } from '@shared/components/toast';

@Component({
  selector: 'app-edit-school',
  imports: [CustomInputComponent, ReactiveFormsModule, ToastComponent, MessageErrorInputComponent, MenuVerticalComponent],
  templateUrl: './edit-school.component.html',
  styleUrl: './edit-school.component.css',
  providers: [ToastService]
})
export class EditSchoolComponent implements OnInit {

  private activateRote = inject(ActivatedRoute);
  private id = this.activateRote.snapshot.params['id'];
  private schoolHttp = inject(SchoolHttpService);
  private toast = inject(ToastService);

  isDisable = false;

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]),
  })


  ngOnInit(): void {

    this.schoolHttp.getFindOne(this.id).subscribe({
      next: (res) => {

        this.form.get('name')?.setValue(res.data.name);
      }
    })
  }

  getHasError(error: string) {
    return this.form.get('name')?.hasError(error);
  }

  onSubmit() {

    if (this.form.valid) {
      this.isDisable = true;
      this.schoolHttp.update(this.id, this.form.value as { name: string }).subscribe({
        next: (res) => {
          this.isDisable = false;
          this.toast.open({ paragraph: 'Escuela actualizada', status: ToastStatus.SUCCESS, title: 'Éxito', deration: 3000 });
        },
        error: (err) => {
          this.isDisable = false;
        }
      })
    }
  }
}
