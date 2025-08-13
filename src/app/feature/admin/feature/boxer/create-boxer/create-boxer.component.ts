import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { SchoolHttpService } from '@core/http/school-http/school-http.service';
import { Boxer } from '@core/models/boxer.model';
import { School } from '@core/models/school.model';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-create-boxer',
  imports: [CustomInputComponent, CustomSelectComponent, ReactiveFormsModule],
  templateUrl: './create-boxer.component.html',
  styleUrl: './create-boxer.component.css'
})
export class CreateBoxerComponent implements OnInit {


  private boxerHttp = inject(BoxerHttpService);
  private schoolHttp = inject(SchoolHttpService);

  schools: School[] = [];

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    id_school: new FormControl(0, [Validators.required]),
    age: new FormControl(0, [Validators.required]),
    disability: new FormControl('', [Validators.required]),
    id_category: new FormControl(0, [Validators.required]),
    weight: new FormControl(0, [Validators.required]),
    id_coach: new FormControl(0, [Validators.required]),
    details: new FormControl('', [Validators.required]),
    id_state: new FormControl(0, [Validators.required]),
    corner: new FormControl('', [Validators.required]),
    fights: new FormControl(0, [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });


  ngOnInit(): void {
    forkJoin({
      schools: this.schoolHttp.getAll(),

    }).subscribe(({ schools }) => {
      this.schools = schools.data;
    });
  }

  onSubmit() {

    if (this.form.valid) {
      this.boxerHttp.create(this.form.value as Boxer).subscribe(
        {
          next: (value) => {

          }
        }
      );
    }
  }

}
