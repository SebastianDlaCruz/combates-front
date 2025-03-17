import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemReorderEventDetail } from '@ionic/angular/standalone';
import { ItemsFightsComponent } from '../items-fights/items-fights.component';

@Component({
  selector: 'app-table-fights',
  templateUrl: './table-fights.component.html',
  styleUrls: ['./table-fights.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonReorder, IonReorderGroup, ItemsFightsComponent,]
})
export class TableFightsComponent implements OnInit {


  ngOnInit() { }

  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {

    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  };



}
