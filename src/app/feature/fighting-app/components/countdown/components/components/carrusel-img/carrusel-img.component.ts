import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carrusel-img',
  imports: [],
  templateUrl: './carrusel-img.component.html',
  styleUrl: './carrusel-img.component.css'
})
export class CarruselImgComponent implements OnInit, OnDestroy {

  imgs = [
    {
      id: 1,
      src: '/imgs-carrusel/pelea1.webp',
      alt: 'pelea 1'
    },
    {
      id: 2,
      src: '/imgs-carrusel/pelea2.webp',
      alt: 'pelea 2'
    },
    {
      id: 3,
      src: '/imgs-carrusel/pelea3.webp',
      alt: 'pelea 3'
    },
    {
      id: 4,
      src: '/imgs-carrusel/pelea4.webp',
      alt: 'pelea 4'
    }
  ];

  countID = 1;
  sub$?: Subscription;

  ngOnInit(): void {
    this.intervalImg();
  }

  intervalImg() {
    this.sub$ = interval(30000).subscribe(() => {
      this.countID++;

      if (this.countID > 3) {
        this.countID = 1;
      }
    })
  };

  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
  }

}
