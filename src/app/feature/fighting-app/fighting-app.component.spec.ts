import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingAppComponent } from './fighting-app.component';

describe('FightingAppComponent', () => {
  let component: FightingAppComponent;
  let fixture: ComponentFixture<FightingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightingAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
