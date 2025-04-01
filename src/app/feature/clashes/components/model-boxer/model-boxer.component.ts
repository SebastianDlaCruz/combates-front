import { Component, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';
@Component({
  selector: 'app-model-boxer',
  templateUrl: './model-boxer.component.html',
  styleUrls: ['./model-boxer.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonContent, IonItem, IonInput, IonTitle, IonButton]
})
export class ModelBoxerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  confirm() {

  }

  cancel() {

  }
}
