import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

interface Config {
  initDate: Date;
  endDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  updateCountdown(date: Date) {

    return interval(1000).pipe(
      map(() => {
        const initDate = new Date().getTime();
        const now = date.getTime();
        const distance = now - initDate;

        if (distance < 0) return '0d 0h 0m 0s';

        const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      })
    )

  }





}
