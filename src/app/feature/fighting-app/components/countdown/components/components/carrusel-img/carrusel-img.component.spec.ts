import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselImgComponent } from './carrusel-img.component';

describe('CarruselImgComponent', () => {
  let component: CarruselImgComponent;
  let fixture: ComponentFixture<CarruselImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
