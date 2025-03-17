import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { Boxer } from '@core/models/boxer.model';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, ReactiveFormsModule, IonItem, IonInput, IonButton]
})
export class CreateComponent implements OnInit {

  private boxers_services$ = inject(BoxerHttpService);

  form = new FormGroup({
    name: new FormControl('Matias', Validators.required),
    id_school: new FormControl(1, Validators.required),
    age: new FormControl(11, Validators.required),
    disability: new FormControl('no', Validators.required),
    id_category: new FormControl(1, Validators.required),
    weight: new FormControl(23.2, Validators.required),
    id_coach: new FormControl(1, Validators.required),
    details: new FormControl('no', Validators.required),
    id_state: new FormControl(1, Validators.required),
    corner: new FormControl('rojo', Validators.required),
    fights: new FormControl(2, Validators.required),
    gender: new FormControl('hombre', Validators.required),

  });

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    const value = this.form.value as Boxer;

    this.boxers_services$.create<Boxer>(value).subscribe({
      next: (res) => {
        console.log(res);
      }
    });

  }

}
