import { Component, OnInit } from '@angular/core';
import {
  IonImg,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { home, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss'],
  standalone: true,
  imports: [
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonImg,]
})
export class TabMenuComponent implements OnInit {


  ngOnInit() {
    addIcons({ personOutline, home });
  }

}
