import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarruselImgComponent } from './components/components/carrusel-img/carrusel-img.component';
import { CountdownService } from './service/countdown.service';

@Component({
  selector: 'app-countdown',
  imports: [CarruselImgComponent],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit {

  private countdownService = inject(CountdownService);
  countdown = "";
  sub$?: Subscription;


  ngOnInit(): void {
    const sub = this.countdownService.updateCountdown(new Date('2025-07-30T00:02'))

    this.sub$ = sub.subscribe(countdown => {
      this.countdown = countdown
    });

  }

  ngOnDestroy() {
    this.sub$?.unsubscribe()
  }



}
