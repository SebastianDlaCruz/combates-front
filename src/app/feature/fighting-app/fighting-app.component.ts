import { Component } from '@angular/core';
import { FightingItemsComponent } from '../admin/feature/clashes/view-clashes/components/fighting-items/fighting-items.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ItemFightingComponent } from "./components/item-fighting/item-fighting.component";

@Component({
  selector: 'app-fighting-app',
  imports: [CountdownComponent, FightingItemsComponent, ItemFightingComponent],
  templateUrl: './fighting-app.component.html',
  styleUrl: './fighting-app.component.css'
})
export class FightingAppComponent {

}
