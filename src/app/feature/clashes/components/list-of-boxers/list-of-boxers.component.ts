import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boxer } from '@core/models/boxer.model';
import { IonButton, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-of-boxers',
  templateUrl: './list-of-boxers.component.html',
  styleUrls: ['./list-of-boxers.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonButton]
})
export class ListOfBoxersComponent implements OnInit {

  @Input() boxers: Boxer[] = [];
  @Output() Click = new EventEmitter<Boxer>();

  constructor() { }

  ngOnInit() { }

  onClick(boxer: Boxer): void {
    this.Click.emit(boxer);
  }

}
