import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TableFightsComponent } from './components/table-fights/table-fights.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TableFightsComponent, IonSearchbar]
})
export class HomeComponent implements OnInit, OnDestroy {


  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

}
