import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-boxers',
  templateUrl: './boxers.component.html',
  styleUrls: ['./boxers.component.scss'],
  standalone: true,
  imports: [IonButton]
})
export class BoxersComponent implements OnInit {

  navigate = inject(Router);
  constructor() { }

  ngOnInit() { }

  onNavigate() {
    this.navigate.navigate(['/tabs/boxers/create'])
  }

}
