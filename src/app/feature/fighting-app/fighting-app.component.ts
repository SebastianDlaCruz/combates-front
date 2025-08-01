import { Component } from '@angular/core';
import { CountdownComponent } from './components/countdown/countdown.component';

@Component({
  selector: 'app-fighting-app',
  imports: [CountdownComponent],
  templateUrl: './fighting-app.component.html',
  styleUrl: './fighting-app.component.css'
})
export class FightingAppComponent {

}
