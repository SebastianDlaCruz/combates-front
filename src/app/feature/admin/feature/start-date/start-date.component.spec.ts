import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDateComponent } from './start-date.component';

describe('StartDateComponent', () => {
  let component: StartDateComponent;
  let fixture: ComponentFixture<StartDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
