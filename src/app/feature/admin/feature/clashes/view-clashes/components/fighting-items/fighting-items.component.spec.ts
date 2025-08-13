import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingItemsComponent } from './fighting-items.component';

describe('FightingItemsComponent', () => {
  let component: FightingItemsComponent;
  let fixture: ComponentFixture<FightingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightingItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
