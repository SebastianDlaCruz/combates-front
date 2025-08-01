import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClashesComponent } from './view-clashes.component';

describe('ViewClashesComponent', () => {
  let component: ViewClashesComponent;
  let fixture: ComponentFixture<ViewClashesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewClashesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
