import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoxerComponent } from './view-boxer.component';

describe('ViewBoxerComponent', () => {
  let component: ViewBoxerComponent;
  let fixture: ComponentFixture<ViewBoxerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBoxerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewBoxerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
