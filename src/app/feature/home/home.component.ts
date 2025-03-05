import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BoxerHttpService } from '@core/http/boxer-http/boxer-http.service';
import { Boxer } from '@core/models/boxer.model';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle]
})
export class HomeComponent implements OnInit, OnDestroy {

  private boxerHttp$ = inject(BoxerHttpService);
  private boxer$!: Subscription;
  boxers: Boxer[] = [];

  ngOnInit() {
    this.boxer$ = this.boxerHttp$.getAll<Boxer[]>().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this.boxers = response.data;
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.boxer$) {
      this.boxer$.unsubscribe();
    }
  }

}
